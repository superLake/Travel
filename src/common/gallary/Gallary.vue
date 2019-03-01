<template>
  <div class="container" @click="handleShutDown">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="img of gallaryImg" :key="img.id">
          <img class="gallary-image" :src="img">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    gallaryImg: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
        observeParents: true,
        // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        observer: true
      }
    }
  },
  methods: {
    handleShutDown () {
      this.$emit('shutDownGallary')
    }
  }
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow:inherit
.container
  z-index:99
  position:absolute
  top:0
  left:0
  right:0
  bottom:0
  display :flex
  flex-direction :column
  justify-content :center
  background:#000
  .wrapper
    position:relative
    width :100%
    height:0
    padding-bottom:66%
    .gallary-image
      width:100%
    .swiper-pagination
      color:#fff
      bottom:-1rem
</style>
