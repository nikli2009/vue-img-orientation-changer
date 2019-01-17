import { getEXIFOrientation, toOrientationOne } from '../utils'
export default {
  name: 'img-orientation-changer',
  bind: function (el) {
    _handleOrientation(el)
  },
  update: function(el) {
    _handleOrientation(el)
  }
}

const _handleOrientation = (el) => {
  if(el.tagName !== 'IMG') {
    console.warn('WARNING: img-orientation-changer only works on IMG element.');
    return ;
  }
  getEXIFOrientation(el).then((orientation) => {
    toOrientationOne(el, orientation);
  });
};
