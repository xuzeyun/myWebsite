<template>
  <!-- 设计：默认一个类名btnClass，传递进来一个类名cname -->
  <div :class="[btnClass,cname]">
    <p></p>
  </div>
</template>

<script>
export default {
  // 属性传递
  props:{
    cname:{
      type: String,
      default: "",
    }
  },
  data(){
    return{
      btnClass:"btn",
    }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.btn{
  @include btn;
}
</style>
