<template>
  <div>
    <Slider :items="items" :class="$style.slider"/>
  </div>
</template>

<script>
import Slider from "../core/slider.vue"
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'
export default {
    components: {
        Slider,
    },
    data() {
        return {
            items:
            [{
                href: "home",
                src: slider1,
            }, {
                href: "home",
                src: slider2,
            }, {
                href: "home",
                src: slider3,
            }]
        }
    }
}
</script>
<style lang="scss" module>
  @import "../../css/element.scss";
  .slider{
    height: auto;
    background: #2b2938;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
  }
  img{
    vertical-align: middle;
    width: 100%;
  }
</style>
