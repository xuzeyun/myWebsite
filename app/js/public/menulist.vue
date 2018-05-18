<template>
  <section :class="$style.listbox">
    <ul :class="$style.listul">
      <li :class="$style.list" v-for="item in items" :key="item.img">
        <img :src="item.img" :alt="item.title">
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import icon4 from '../../assets/images/icon4.png'
export default {
  data(){
    return{
      items: [
        {href:"home", title: "前端/H5开发", img:icon1},
        {href:"home", title: "NODE.JS程序开发", img:icon2},
        {href:"home", title: "UI设计", img:icon3},
        {href:"home", title: "LOGO设计", img:icon4}
      ]
    }
  }
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  .listbox{ margin-top: 50px;}
  .listul{
    @include list(row);
    background: #fff;
    font-size: 20px;
    padding: 40px 0;
    border-radius: 10px;
    .list{
      flex: 1;
      text-align: center;
      p{
        font-size: 24px;
        color: #535c67;
      }
      img{
        width: 40%;
        margin-bottom: 20px;
      }
    }
  }

</style>
