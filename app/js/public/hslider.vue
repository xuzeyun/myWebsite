<template>
  <div>
    <Slider :items="items" :class="$style.slider"/>
  </div>
</template>

<script>
import Slider from "../core/slider.vue"
export default {
    components: {
        Slider,
    },
    data() {
        return {
            items:
            [{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t15640/136/2579376123/39637/6dcc30e2/5aaf93c5N897cd468.jpg?width=750&height=320",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t18451/50/878004228/45504/75f19292/5aaf9429N263b6b08.jpg?width=750&height=320",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t14923/213/2632132556/32827/e785366c/5aaf9379Nb6c91bfe.jpg?width=750&height=320",
            }]
        }
    }
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  .slider{
    height: 500px;
    background: #2b2938;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
  }
  img{
    width: 100%;
  }
</style>
