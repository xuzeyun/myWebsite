<template>
  <div :class="$style.header">
    <div :class="$style.nav">
      <ul>
        <li :class="$style.logo"></li>
        <li><a :class="$style.active" href="javascript:;">首页</a></li>
        <li><a href="javascript:;">小案例</a></li>
        <li><a href="javascript:;">设计</a></li>
        <li><a href="javascript:;">网址</a></li>
        <li><a href="javascript:;">ME</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" module>
  .header {
      background: #2b2938;
      color: #a1a7c2;
      height: 120px;
      line-height: 120px;
      position: fixed;
      top: 50px;
      left: 50px;
      right: 50px;
      font-size: 32px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
      ul{
        display: flex;
      }
      li{
        flex: 1;
      }
      a{
        display: block;
        color: #a1a7c2;
        text-align: center;
        text-decoration: none;
        &:hover{ color: #fff;}
      }
      a.active{
        background: rgba(0,0,0,0.4);
        color: #fff;
      }
      .logo {
          // background: #ddd;
      }
      .nav {
      }
  }
</style>
