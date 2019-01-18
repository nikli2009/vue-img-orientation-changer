import { getEXIFOrientation, toOrientationOne } from '../utils'
export default {
  name: 'img-orientation-changer',
  bind: function (el, { modifiers = { debug: false } }) {
    const { debug } = modifiers;
    _handleOrientation(el, debug)
  },
  update: function(el,  { modifiers = { debug: false } }) {
    const { debug } = modifiers;
    _handleOrientation(el, debug)
  }
}

const _handleOrientation = (el, debug) => {
  if(el.tagName !== 'IMG') {
    console.warn('WARNING: img-orientation-changer only works on IMG element.');
    return ;
  }
  getEXIFOrientation(el, debug).then((orientation) => {
    toOrientationOne(el, orientation, debug);
  });
};
