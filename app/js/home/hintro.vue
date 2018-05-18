<template>
  <!-- 使用Panel组件 -->
  <Panel :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.title">{{ title }}</div>
      <div :class="$style.title2">{{ title2 }}</div>
      <div :class="$style.cont">
        <p v-for="item in pItems">{{ item }}</p>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue';
export default {
  components:{
    Panel
  },
  data(){
    return{
      title: "I am XuZeyun",
      title2: "I like to Code & Design",
      pItems:[
        "我叫XuZeyun，来自太行山区，是一名前端工程师，对前端技术充满热情。",
        "我也喜欢设计，起初也尝试过一年的设计工作，但因为基础差、底子薄、天赋不足而选择了放弃。反过来说，把它变成自己的爱好倒也没什么不好的。",
        "专业计算机网络技术，培训过JAVA WEB，最后选择了前端开发。我的理想工作状态是可以包揽从UI设计到前端的工作内容，这部分的内容是我最感兴趣的。当然也有做nodejs后端开发的尝试，因为前端多多少少会涉及到。",
      ]
    }
  }
}
</script>

<style lang="scss" module>
.panel{
  margin-top: 50px;
  background: #2b2938;
  padding: 30px;
  border-radius: 10px;
  .title, .title2{
    font-size: 60px;
    line-height: 70px;
    text-align: center;
    color: #fff;
    font-family: "Sylfaen";
  }
  .title2{
    font-size: 32px;
    color: #ffe8a1;
    line-height: 40px;
  }
  .cont{
    padding-top: 20px;
    column-count:2;
    column-gap:40px;
    column-rule:3px outset #333;
    p{
      color: #9794ab;
      font-size: 30px;
      line-height: 50px;
      text-indent: 0.8rem;
    }
  }
}
</style>
