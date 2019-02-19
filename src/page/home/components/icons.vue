<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-image">
            <img class="icon-image-content" :src=item.imgUrl alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'Icons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~style/varibles.styl"
  @import "~style/mixins.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
    .icon
      position :relative
      overflow:hidden
      float:left
      width: 25%
      height :0
      padding-bottom: 25%
      .icon-image
        position :absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        box-sizing:border-box
        padding:.1rem
        .icon-image-content
          display:block
          margin: 0 auto
          height:100%
      .icon-desc
        position:absolute
        left:0
        right:0
        bottom:0
        height:.44rem
        line-height:.44rem
        text-align :center
        color:$darkTextColor
        ellipse()
</style>
