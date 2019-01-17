import ImgOrientationChanger from './img-orientation-changer'

ImgOrientationChanger.install = Vue => {
  Vue.directive(ImgOrientationChanger.name, ImgOrientationChanger)
};

export default ImgOrientationChanger
