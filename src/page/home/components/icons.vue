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
  data () {
    return {
      swiperOption: {
        autoplay: false
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      },
      iconsList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        }, {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '深圳必游'
        }, {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          desc: '海洋馆'
        }, {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc: '动植物园'
        }, {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          desc: '泡温泉'
        }, {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/a6/6d97515091789602.png',
          desc: '世界之窗'
        }, {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
          desc: '玩转长隆'
        }, {
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
          desc: '东部华侨城'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
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
