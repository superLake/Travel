<template>
  <div class="recommend">
    <div>
      <div class="title">周末去哪儿</div>
      <ul>
        <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" alt=""/>
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: 1,
        title: '清远周边逛',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
        desc: '人人都有一双发现美的眼睛'
      }, {
        id: 2,
        title: '清远周边逛',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
        desc: '人人都有一双发现美的眼睛'
      }, {
        id: 3,
        title: '清远周边逛',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
        desc: '人人都有一双发现美的眼睛'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .title
    background:#eee
    margin-top:.2rem
    line-height :.8rem
    text-indent :.2rem
  .item-img-wrapper
    overflow:hidden
    height :0
    padding-bottom: 33.7%
    .item-img
      width :100%
      padding :.1rem
  .item-info
    padding:.1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipse()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipse()
</style>
