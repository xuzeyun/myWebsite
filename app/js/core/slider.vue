<template>
  <div :class="cname">
    <!-- swiper -->
    <swiper :options="swiperOption">
      <!-- <swiper-slide v-for="item in items" :key="item.href"> -->
      <swiper-slide v-for="item in items">
          <router-link :to="{ name: item.href}">
              <img :src="item.src" alt="">
          </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"/>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  props: {
      cname: {
          type: String,
          default: "",
      },
      items: {
          type: Array,
          default() {
              return [{ href: "", src: "" }]
          },
      },
  },
}
</script>
<style>
/* @import "~swiper/dist/css/swiper.css"; */
</style>
