import pkg from '../package.json'
import Compact from './components/Compact.vue'
import Grayscale from './components/Grayscale.vue'
import Material from './components/Material.vue'
import Slider from './components/Slider.vue'
import Swatches from './components/Swatches.vue'
import Photoshop from './components/Photoshop.vue'
import Sketch from './components/Sketch.vue'
import Chrome from './components/Chrome.vue'
import Twitter from './components/Twitter.vue'
import Alpha from './components/common/Alpha.vue'
import Checkboard from './components/common/Checkboard.vue'
import EditableInput from './components/common/EditableInput.vue'
import Hue from './components/common/Hue.vue'
import Saturation from './components/common/Saturation.vue'
import ColorMixin from './mixin/color.js'

const version = pkg.version

const VueColor = {
  version,
  Compact,
  Grayscale,
  Twitter,
  Material,
  Slider,
  Swatches,
  Photoshop,
  Sketch,
  Chrome,
  Alpha,
  Checkboard,
  EditableInput,
  Hue,
  Saturation,
  ColorMixin
}

if (!(typeof process === 'object' && String(process) === '[object process]')) {
  window.VueColor = VueColor
}

export default VueColor

export {
  version,
  Compact,
  Grayscale,
  Twitter,
  Material,
  Slider,
  Swatches,
  Photoshop,
  Sketch,
  Chrome,
  Alpha,
  Checkboard,
  EditableInput,
  Hue,
  Saturation,
  ColorMixin
}
