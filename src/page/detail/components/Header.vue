<template>
  <div class="header">
    <div class="header-abs" v-show="showHeader">
      <div class="iconfont header-back-icon">&#xe624;</div>
    </div>
    <div class="header-back" v-show="!showHeader" :style="styleObj">
      <router-link to="/">
        <div class="iconfont detail-home-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeader: true,
      styleObj: {
        opacity: 1
      }
    }
  },
  methods: {
    handleScroll () {
      let topY = document.documentElement.scrollTop
      console.log(topY)
      if (topY > 60) {
        let opacity = topY / 120
        opacity = opacity > 1 ? 1 : opacity
        this.styleObj = { opacity }
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .header-abs
    position: absolute
    top:0
    left:0
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    margin:.1rem
    background: rgba(0,0,0,0.8)
    border-radius: .4rem
    color:#fff
  .header-back
    position:fixed
    top:0
    left:0
    right:0
    overflow:hidden
    height:.86rem
    line-height:.86rem
    text-align: center
    color: #fff
    background :$bgColor
    .detail-home-back
      position:absolute
      top :0
      left :0
      width :.64rem
      color :#fff
      line-height :.86rem
      text-align :center
      font-size :.4rem
</style>
