<template>
  <div class="wrapper">
    <!--因为一开始，ajax请求前swiperList还是空数组，所以导致渲染出来的效果默认先展示最后一张，为了解决这个问题，我们添加v-if="swiperList.length"，即当数组有东西时才把swiper显然出来-->
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src=item.imgUrl alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>
<style lang="stylus" scoped>
  /*>>>：穿透功能，使对组件外的dom也有效，不受scoped的限制*/
  .wrapper >>> .swiper-pagination-bullet-active
    background:#fff!important
  .wrapper
    overflow :hidden
    width: 100%
    height: 0
    padding-bottom :31.25%
    background:#eee
  .swiper-img
    width:100%
</style>
