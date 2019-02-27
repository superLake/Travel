<template>
  <div>
    <div class="search">
      <input v-model="searchContent" class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </div>
    <div class="searchList-wrapper" ref="searchList" v-show="searchContent">
      <ul class="searchList">
        <li
          class="searchList-item border-bottom"
          v-for="item of list"
          :key="item.id"
          :ref="item.id"
          @click="handleClickCity(item.name)"
        >{{item.name}}</li>
        <li class="searchList-item border-bottom nothing" v-show="!list.length">无数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import BScroll from 'better-scroll'
export default{
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      searchContent: '',
      timer: null,
      list: []
    }
  },
  watch: {
    searchContent () {
      if (!this.searchContent) {
        this.list = []
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.name.indexOf(this.searchContent) > -1 || value.spell.indexOf(this.searchContent) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 30)
    }
  },
  methods: {
    handleClickCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.searchList)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing:border-box
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      width: 100%
      text-align :center
      border-radius :.06rem
  .searchList-wrapper
    z-index :1
    overflow :hidden
    position :absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background :#eee
    .searchList-item
      line-height :.62rem
      padding-left:.2rem
      background: #fff
      color: #666
    .nothing
      line-height :1rem
      font-size: .3rem
      text-align :center
</style>
