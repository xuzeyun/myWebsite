<template>
  <div>
    <Header/>
    <section :class="$style.container">
      <Slider/>
    </section>
  </div>
</template>

<script>
  import Header from '../public/header.vue';
  import Slider from '../public/hslider.vue';
  export default {
    components: {
      // 2
      Header,
      Slider
    }
  }
</script>
<style lang="scss" module>
.container{
  padding: 50px;
  padding-top: 220px;
}
</style>
