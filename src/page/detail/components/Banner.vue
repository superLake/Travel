<template>
  <div>
    <div class="banner" @click="handleShowUp">
      <img
        class="banner-image"
        src="http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_600x330_28bda6b0.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">
          深圳野生动物园(AAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont">&#xe791;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :gallaryImg="gallaryImg" v-show="isShow" @shutDownGallary="handleShutDown"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default{
  name: 'Banner',
  props: {
    gallaryImg: Array
  },
  components: {
    CommonGallary
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    handleShutDown () {
      this.isShow = false
    },
    handleShowUp () {
      this.isShow = true
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  position:relative
  overflow: hidden
  height: 0
  padding-bottom :55%
  background :#eee
  .banner-image
    width :100%
    background:green
  .banner-info
    display:flex
    position:absolute
    bottom:0
    left:0
    right:0
    color:#fff
    background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
    .banner-title
     flex:1
     padding: 0 .2rem
     margin-bottom:.24rem
     height: .4rem
     line-height: .4rem
     font-size: .32rem
    .banner-number
      height:.32rem
      line-height:.32rem
      padding:0 .4rem
      margin-bottom:.24rem
      margin-right:.24rem
      border-radius:.6rem
      background:rgba(0,0,0,0.8)
</style>
