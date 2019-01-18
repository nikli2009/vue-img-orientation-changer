## Vue Img Orientation Changer
[English](./README.md) | 简体中文

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

> 一个 `Vue 指令(Directive)`, 可以自动调整手机设备拍摄的照片的`方向` 支持 `jpeg`  `jpg`  `tiff`

` TIPS: 再也不用歪着头看图了 `

![image](https://user-images.githubusercontent.com/10917606/51384914-b0469b00-1b58-11e9-924b-53c8ae374c2c.png)


### 安装

##### 通过 NPM
```
npm install vue-img-orientation-changer -S
```

##### 项目中引入 
```
import Vue from 'vue'
import VueImgOrientationChanger from 'vue-img-orientation-changer'

Vue.use(VueImgOrientationChanger)
```

##### 使用方式
```
<img v-img-orientation-changer src="https://user-images.githubusercontent.com/10917606/51309472-735aa580-1a7f-11e9-8081-67ced9a3f536.jpeg">
```

## 协议

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/vue-img-orientation-changer.svg
[npm-url]: https://npmjs.org/package/vue-img-orientation-changer
[downloads-image]: https://img.shields.io/npm/dm/vue-img-orientation-changer.svg
[downloads-url]: https://npmjs.org/package/vue-img-orientation-changer
