import imagesLoaded from 'imagesloaded'
import EXIF from 'exif-js'

const getEXIFOrientation = (el) => {
  return new Promise((resolve, reject) => {
    try {
      imagesLoaded(el, function () {
        el.exifdata = null;
        EXIF.getData(el, function () {
          const orientation = EXIF.getTag(this, 'Orientation');
          resolve(orientation)
        });
      })
    } catch (e) {
      reject(e)
    }
  })
};

const toOrientationOne = (el, orientation) => {
  let _toTransform = '';
  const cWidth = el.clientWidth;
  const cHeight = el.clientHeight;
  const gapFill = Math.abs((cWidth - cHeight)/2);
  switch (orientation) {
    case 1: {
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
  return _toTransform
};

export {
  getEXIFOrientation, toOrientationOne
}
