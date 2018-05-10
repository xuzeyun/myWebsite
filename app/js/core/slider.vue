<template>
  <section :class="cname">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in items" :key="item.href">
        <router-link :to="{ name: 'item.href'}">
          <img :src="item.src" alt="">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </section>
</template>

<script>
import {swiper, swiperSlide} from 'vue-swesome-swiper'
export default {
  // components: {
  //   swiper,
  //   swiperSlide,
  // },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
  props: {
    items: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style lang="css" module>
  @import "~swiper/dist/css/swiper";
</style>
