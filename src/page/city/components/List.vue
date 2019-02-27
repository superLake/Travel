<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleClickCity(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="item.id" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div
          class="item-list"
          v-for="city of item"
          :key="city.id"
          @click="handleClickCity(city.name)"
        >
          <div class="item border-bottom">{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letters: String
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleClickCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letters () {
      this.scroll.scrollToElement(this.$refs[this.letters][0])
      // console.log(this.$refs)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~style/mixins"
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow:hidden
    position: absolute
    top:1.58rem
    left:0
    right:0
    bottom:0
  .title
    title()
    color: #666
    margin:0
  .button-list
    overflow :hidden
    padding:.1rem .6rem .1rem .1rem
    .button-wrapper
      float:left
      width:33.33%
      .button
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #ccc
        border-radius :.06rem
  .item-list
    line-height:.76rem
    color:#666
    padding-left:.2rem
</style>
