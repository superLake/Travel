<template>
  <div class="recommend">
    <div>
      <div class="title">热门推荐</div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl" alt=""/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: 1,
        title: '深圳野生动物园',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
        desc: '去旅游，就来深圳野生动物园'
      }, {
        id: 2,
        title: '深圳野生动物园',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
        desc: '去旅游，就来深圳野生动物园'
      }, {
        id: 3,
        title: '深圳野生动物园',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
        desc: '去旅游，就来深圳野生动物园'
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
.item
  display: flex
  height: 1.9rem
  overflow: hidden
  .item-img
    width :1.7rem
    height :1.7rem
    padding :.1rem
  .item-info
    min-width:0
    flex:1
    padding:.1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipse()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipse()
    .item-button
      line-height :.44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .2rem
      border-radius :.06rem
      color: #fff
</style>
