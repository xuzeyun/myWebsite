<template>
  <div :class="$style.header">
    <h1 :class="$style.logo">logo</h1>
    <div :class="$style.nav">
      <ul>
        <li><a href="javascript:;">首页</a></li>
        <li><a href="javascript:;">小案例</a></li>
        <li><a href="javascript:;">设计</a></li>
        <li><a href="javascript:;">网址</a></li>
        <li><a href="javascript:;">关于我</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" module>
  .header {
      background: #333;
      color: #666;
      height: 100px;
      line-height: 100px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      font-size: 32px;
      .logo {
          width: 200px;
          height: 60px;
          display: block;
          background: #ddd;
      }
      .nav {
      }
  }
</style>
