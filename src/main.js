import Vue from 'vue'
import App from './App.vue'

import VueImgOrientationChanger from './index.js'

Vue.use(VueImgOrientationChanger);

new Vue({
  el: '#app',
  render: h => h(App)
});
