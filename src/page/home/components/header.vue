<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}

</script>
<style lang="stylus" scoped>
  .header
    display:flex
    line-height: .86rem
    background: #00bcd4
    color: #fff
    .header-left
      width: .64rem
      float: left
    .header-input
      flex: 1
      height:.64rem
      line-height:.64rem
      margin:.12rem .2rem 0 0
      background:#fff
      border-radius:.1rem
      color:#ccc
    .header-right
      width: 1.24rem
      float: right
</style>
