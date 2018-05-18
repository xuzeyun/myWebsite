<template>
  <div>
    <Header/>
    <section :class="$style.container">
      <Slider/>
      <Menulist/>
      <Hintro/>
      <Htime/>
    </section>

  </div>
</template>

<script>
  import Header from '../public/header.vue';
  import Slider from '../public/hslider.vue';
  import Menulist from '../public/menulist.vue';
  import Hintro from './hintro.vue';
  import Htime from './htime.vue';
  export default {
    components: {
      // 2
      Header,
      Slider,
      Menulist,
      Hintro,
      Htime
    }
  }
</script>
<style lang="scss" module>
.container{
  padding: 50px;
  padding-top: 220px;
}
</style>
