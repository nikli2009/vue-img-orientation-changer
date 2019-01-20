import { getEXIFOrientation, toOrientationOne } from '../utils'
export default {
  name: 'img-orientation-changer',
  bind: function (el, { modifiers = { debug: false } }) {
    const { debug } = modifiers;
    _handleOrientation(el, debug)
  },
  update: function(el,  { modifiers = { debug: false }}, vnode, oldVnode) {
    const { debug } = modifiers;

    const { data: { attrs : { src : oldSrc }} } = oldVnode;
    const { data: { attrs : { src : newSrc }} } = vnode;

    // if src changes => we need to update to reset transform property.
    // otherwise, we don't have to care about the image changes.
    if(oldSrc !== newSrc) {
      if(debug) { console.log('_onUpdate', oldSrc, '=>',  newSrc); }
      _handleOrientation(el, debug)
    }
  }
}

const _handleOrientation = (el, debug) => {
  if(el.tagName !== 'IMG') {
    console.warn('WARNING: img-orientation-changer only works on IMG element.');
    return ;
  }
  getEXIFOrientation(el, debug).then((orientation) => {
    toOrientationOne(el, orientation, debug);
  }).catch(e => {
    console.warn('WARNING: img failed to load', el, e);
  });
};
