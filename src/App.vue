<template>
  <div id="app">
    <a class="github-fork-ribbon" href="https://github.com/lk77/vue3-color-picker" title="Fork me on GitHub">Fork me on GitHub</a>
    <div class="header-container">
      <div class="header">
        <div class="intro-wrap">
          <div class="intro">
            <h1>Vue3-color-picker</h1>
            <p role="presentation">A Collection of Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter, Material Design & more</p>
            <br/>
            <p role="presentation">This package bring Vue 3 support to original package : </p>
            <br/>
            <a class="vue-color" href="https://www.npmjs.com/package/vue-color" title="vue-color">vue-color</a>
          </div>
        </div>
        <div class="header-bg" :style="{'background-color': bgc}"></div>
        <div class="demo-item">
          <chrome-picker :modelValue="colors" @update:modelValue="updateValue"></chrome-picker>
          <h2>Chrome</h2>
        </div>
      </div>
    </div>

    <div class="demo-container">
      <div class="demo-list">
        <div class="demo-item">
          <sketch-picker v-model="colors"></sketch-picker>
          <h2>Sketch</h2>
        </div>
        <div class="demo-item">
          <photoshop-picker v-model="colors" @ok="onOk" @cancel="onCancel"></photoshop-picker>
          <h2>Photoshop</h2>
        </div>
      </div>
      <div class="demo-list">
        <div class="demo-item">
          <material-picker v-model="colors"></material-picker>
          <h2>Material</h2>
        </div>
        <div class="demo-item">
          <slider-picker v-model="colors"></slider-picker>
          <h2>Slider</h2>
        </div>
      </div>
      <div class="demo-list">
        <div class="demo-item">
          <compact-picker v-model="colors"></compact-picker>
          <h2>Compact</h2>
          <br>
          <br>
          <grayscale-picker :modelValue="colors" @update:modelValue="updateValue"></grayscale-picker>
          <h2>Grayscale</h2>
        </div>
        <div class="demo-item">
          <swatches-picker v-model="colors"></swatches-picker>
          <h2>Swatches</h2>
        </div>
      </div>
      <div class="demo-list">
        <div class="demo-item">
          <twitter-picker :modelValue="colors" @update:modelValue="updateValue"></twitter-picker>
          <h2>Twitter</h2>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// we use both import methods
import VueColor, { Material, Compact, Grayscale, Swatches, Slider, Sketch, Chrome } from './build.js'

const defaultProps = {
  hex: '#194d33e6',
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 0.9
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.30,
    a: 0.9
  },
  rgba: {
    r: 159,
    g: 96,
    b: 43,
    a: 0.9
  },
  a: 0.9
}

export default {
  components: {
    'material-picker': Material,
    'compact-picker': Compact,
    'grayscale-picker': Grayscale,
    'swatches-picker': Swatches,
    'slider-picker': Slider,
    'sketch-picker': Sketch,
    'chrome-picker': Chrome,
    'photoshop-picker': VueColor.Photoshop,
    'twitter-picker': VueColor.Twitter
  },
  data () {
    return {
      colors: defaultProps
    }
  },
  computed: {
    bgc () {
      return this.colors.hex
    }
  },
  methods: {
    onOk () {
      console.log('ok')
    },
    onCancel () {
      console.log('cancel')
    },
    updateValue (value) {
      this.colors = value
    }
  },
  created () {
  }
}
</script>

<style>
  .github-fork-ribbon{width:12.1em;height:12.1em;position:absolute;overflow:hidden;top:0;right:0;z-index:9999;pointer-events:none;font-size:13px;text-decoration:none;text-indent:-999999px}.github-fork-ribbon.fixed{position:fixed}.github-fork-ribbon:before,.github-fork-ribbon:after{position:absolute;display:block;width:15.38em;height:1.54em;top:3.23em;right:-3.23em;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.github-fork-ribbon:before{content:"";padding:.38em 0;background-color:#a00;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),to(rgba(0,0,0,0.15)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.15));background-image:-moz-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.15));background-image:-ms-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.15));background-image:-o-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.15));background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.15));-webkit-box-shadow:0 .15em .23em 0 rgba(0,0,0,0.5);-moz-box-shadow:0 .15em .23em 0 rgba(0,0,0,0.5);box-shadow:0 .15em .23em 0 rgba(0,0,0,0.5);pointer-events:auto}.github-fork-ribbon:after{content:attr(title);color:#fff;font:700 1em "Helvetica Neue",Helvetica,Arial,sans-serif;line-height:1.54em;text-decoration:none;text-shadow:0 -.08em rgba(0,0,0,0.5);text-align:center;text-indent:0;padding:.15em 0;margin:.15em 0;border-width:.08em 0;border-style:dotted;border-color:#fff;border-color:rgba(255,255,255,0.7)}.github-fork-ribbon.left-top,.github-fork-ribbon.left-bottom{right:auto;left:0}.github-fork-ribbon.left-bottom,.github-fork-ribbon.right-bottom{top:auto;bottom:0}.github-fork-ribbon.left-top:before,.github-fork-ribbon.left-top:after,.github-fork-ribbon.left-bottom:before,.github-fork-ribbon.left-bottom:after{right:auto;left:-3.23em}.github-fork-ribbon.left-bottom:before,.github-fork-ribbon.left-bottom:after,.github-fork-ribbon.right-bottom:before,.github-fork-ribbon.right-bottom:after{top:auto;bottom:3.23em}.github-fork-ribbon.left-top:before,.github-fork-ribbon.left-top:after,.github-fork-ribbon.right-bottom:before,.github-fork-ribbon.right-bottom:after{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}
  .vue-color {
    text-decoration: none;
    color: #990000;
    font-weight: bold;
  }
</style>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}

.header-container {
  position: relative;
}
.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 580px;
  background-color: #333;
  opacity: 0.5;
  z-index: -1;
}
.header {
  display: flex;
  max-width: 780px;
  margin: 0 auto;
  padding: 20px 0;
}
.intro-wrap {
  flex: 1;
  margin-right: 100px;
}
.intro {
  /*width: 300px;*/
  color: rgba(0, 0, 0, 0.65098);
}
.intro > h1 {
  font-size: 40px;
  font-weight: normal;
  line-height: 60px;
}
.intro > p {
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
}

.demo-container {
  max-width: 780px;
  min-height: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
.demo-list {
  display: flex;
  margin-bottom: 20px;
}
.demo-item {
  position: relative;
  margin-bottom: 10px;
  margin: 0 10px 0 10px;
  z-index: 2;
}
.demo-item h2 {
  margin: 0;
  padding: 5px 0;
  color: #666;
  font-size: 16px;
  font-weight: normal;
}
</style>
