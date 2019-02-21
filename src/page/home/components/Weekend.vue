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
  props: {
    weekendList: Array
  }
}
</script>
<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .title
    title()
  .item-img-wrapper
    overflow:hidden
    height :0
    padding-bottom: 38.01%
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
