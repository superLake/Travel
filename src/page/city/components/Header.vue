<template>
  <div>
    <div class="header">城市选择</div>
    <router-link to="/">
      <div class="iconfont home-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default{
  name: 'City'
}
</script>
<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .header
    position :relative
    height: .86rem
    line-height: .86rem
    text-align :center
    color:#fff
    font-size:.32rem
    background: $bgColor
  .home-back
    position:absolute
    top :0
    left :0
    width :.64rem
    color :#fff
    line-height :.86rem
    text-align :center
    font-size :.4rem
</style>
