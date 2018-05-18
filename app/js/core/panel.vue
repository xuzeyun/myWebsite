<template>
  <section :class="[panelClass, cname]">
    <h4>{{ title }}</h4>
    <!-- 插槽 Panel中的内容 -->
    <slot/>
  </section>
</template>

<script>
export default {
  props:{
    // 组件需要接收的参数 cname：自定义类名
    cname:{
      type: String,
      default: "",
    },
    // 新手特权对应的标题
    title:{
      type: String,
      default:"",
    }
  },
  data(){
    return{
      panelClass: "panel",
    }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  @include panel;
  // background: #fff;
}
</style>
