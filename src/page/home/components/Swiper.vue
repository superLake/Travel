<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <!--<swiper-slide>-->
        <!--<img class="swiper-img" src="../../../assets/images/20190214105138.jpg" alt="">-->
      <!--</swiper-slide>-->
      <swiper-slide v-for="item of swiperlist" :key=item.id>
        <img class="swiper-img" :src=item.imgUrl alt="">
      </swiper-slide>
      <!--<swiper-slide>I'm Slide 3</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 4</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 5</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 6</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 7</swiper-slide>-->
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperlist: [
        {
          id: 1,
          imgUrl: 'http://v1.lzy.com/images/20190214105107.jpg'
        },
        {
          id: 2,
          imgUrl: 'http://v1.lzy.com/images/20190214105138.jpg'
        }
      ]
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
    padding-bottom :46.17%
    background:#eee
  .swiper-img
    width:100%
</style>
