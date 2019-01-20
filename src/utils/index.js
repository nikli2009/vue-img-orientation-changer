import imagesLoaded from 'imagesloaded'
import EXIF from 'exif-js'

const getEXIFOrientation = (el, debug) => {
  return new Promise((resolve, reject) => {
    try {
      imagesLoaded(el, function () {
        el.exifdata = null;
        EXIF.getData(el, function () {
          const orientation = EXIF.getTag(this, 'Orientation');
          if(debug) { console.log('getEXIFOrientation', orientation); }
          resolve(orientation)
        });
      })
    } catch (e) {
      reject(e)
    }
  })
};

const toOrientationOne = (el, orientation, debug) => {
  let _toTransform = '';
  // don't have consider IE 8 since Vue.js need IE 9+ version;
  const _domRect = el.getBoundingClientRect;
  const cWidth = _domRect.width;
  const cHeight = _domRect.height;
  const gapFill = Math.abs((cWidth - cHeight)/2);
  if(debug) { console.log('toOrientationOne', el, _domRect); }
  // if detect none orientation; reset transform;

  _markElementOrientation(el, orientation);


  if(!orientation) {
    _toTransform = [
      {
        key: 'transform',
        value: ''
      },
      {
        key: 'transform-origin',
        value: ''
      }
    ]
  }
  switch (orientation) {
    case 1: {
      _toTransform = [
        {
          key: 'transform',
          value: ''
        },
        {
          key: 'transform-origin',
          value: ''
        }
      ];
      break;
    }
    case 2: {
      _toTransform = [
        {
          key: 'transform',
          value: 'rotateY(180deg)'
        },
        {
          key: 'transform-origin',
          value: 'center'
        }
      ];
      break;
    }
    case 3: {
      _toTransform = [
        {
          key: 'transform',
          value: 'rotateZ(-180deg)'
        },
        {
          key: 'transform-origin',
          value: 'center'
        }
      ];
      break;
    }
    case 4: {
      _toTransform = [
        {
          key: 'transform',
          value: 'rotateX(180deg)'
        },
        {
          key: 'transform-origin',
          value: 'center'
        }
      ];
      break;
    }
    case 5: {
      _toTransform = [
        {
          key: 'transform',
          value: `rotateZ(90deg) rotateX(180deg) translateX(${gapFill}px)`
        },
        {
          key: 'transform-origin',
          value: 'center'
        }
      ];
      break;
    }
    case 6: {
      _toTransform = [
        {
          key: 'transform',
          value: `rotateZ(90deg) translateX(${gapFill}px)`
        },
        {
          key: 'transform-origin',
          value: 'center'
        }
      ];
      break;
    }
    case 7: {
      _toTransform = [
        {
          key: 'transform',
          value: `rotateZ(-90deg) rotateX(180deg) translateX(-${gapFill}px)`
        },
        {
          key: 'transform-origin',
          value: 'center'
        }
      ];
      break;
    }
    case 8: {
      _toTransform = [
        {
          key: 'transform',
          value: `rotateZ(-90deg) translateX(-${gapFill}px)`
        },
        {
          key: 'transform-origin',
          value: 'center'
        }
      ];
      break;
    }
  }
  for(let attr of _toTransform) {
    el.style[attr.key] = attr.value
  }
};


/*
  @ mark data-orientation
 */
const _markElementOrientation = (el, orientation) => {
  let _orientationMark = orientation || 0;
  el.setAttribute('data-orientation', _orientationMark)
};

export {
  getEXIFOrientation, toOrientationOne
}
