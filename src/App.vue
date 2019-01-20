<template>
  <div id="app">
    <div class="img-wrapper">
      <div>
        <h3>Orientation:1</h3>
        <img src="/static/f1t.jpg" alt="">
      </div>
      <div>
        <h3>Orientation:2</h3>
        <img src="/static/f2t.jpg" alt="">
      </div>
      <div>
        <h3>Orientation:3</h3>
        <img src="/static/f3t.jpg" alt="">
      </div>
      <div>
        <h3>Orientation:4</h3>
        <img src="/static/f4t.jpg" alt="">
      </div>
      <div>
        <h3>Orientation:5</h3>
        <img src="/static/f5t.jpg" alt="">
      </div>
      <div>
        <h3>Orientation:6</h3>
        <img src="/static/f6t.jpg" alt="">
      </div>
      <div>
        <h3>Orientation:7</h3>
        <img src="/static/f7t.jpg" alt="">
      </div>
      <div>
        <h3>Orientation:8</h3>
        <img src="/static/f8t.jpg" alt="">
      </div>
    </div>
    <div class="img-wrapper">
      <div>
        <h3>Orientation:1 Fixed</h3>
        <img :src="file" v-img-orientation-changer.debug :alt="alt" @click="changeFile">
      </div>
      <div>
        <h3>Orientation:2 Fixed</h3>
        <img src="/static/f2t.jpg" v-img-orientation-changer.debug alt="" @click="changeAlt">
      </div>
      <div>
        <h3>Orientation:3 Fixed</h3>
        <img src="/static/f3t.jpg" v-img-orientation-changer.debug alt="">
      </div>
      <div>
        <h3>Orientation:4 Fixed</h3>
        <img src="/static/f4t.jpg" v-img-orientation-changer.debug alt="">
      </div>
      <div>
        <h3>Orientation:5 Fixed</h3>
        <img src="/static/f5t.jpg" v-img-orientation-changer.debug alt="">
      </div>
      <div>
        <h3>Orientation:6 Fixed</h3>
        <img src="/static/f6t.jpg" v-img-orientation-changer.debug alt="">
      </div>
      <div>
        <h3>Orientation:7 Fixed</h3>
        <img src="/static/f7t.jpg" v-img-orientation-changer.debug alt="">
      </div>
      <div>
        <h3>Orientation:8 Fixed</h3>
        <img src="/static/f8t.jpg" v-img-orientation-changer.debug alt="">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      alt: 'default Picture',
      file: '/static/f1t.jpg'
    }
  },
  methods: {
    changeAlt() {
      this.alt = 'changed Picture'
    },
    changeFile() {
      this.file = '/static/f3t.jpg'
    }
  }
}
</script>

<style lang="scss">
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100vh;
  }
  .img-wrapper {
    text-align: center;
    margin-bottom: 20px;
    display: flex;
    > div {
      width: 150px;
      height: 150px;
      padding: 10px;
      border: 1px solid #e3e3e4;
    }
  }
  img {
    display: inline-block;
    margin-right: 20px;
    max-width: 150px;
  }
  h3 {
    font-size: 14px;
    letter-spacing: .5px;
    color:#333;
  }
</style>
