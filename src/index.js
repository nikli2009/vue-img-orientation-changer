// directives
import ImgOrientationChanger from './directives/index';

const directives = [
  ImgOrientationChanger
];

const install = function(Vue, opts = {}) {
  directives.map(directive => {
    Vue.directive(directive.name, directive)
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ImgOrientationChanger
}
