<template>
  <ul class="list">
    <li class="item" v-for="(item,key) of cities" :key="key" @click="clickHandler">{{key}}</li>
  </ul>
</template>
<script>
export default{
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  methods: {
    clickHandler (e) {
      // console.log(e.target.innerHTML)
      this.$emit('change', e.target.innerHTML)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.list
  display:flex
  flex-direction:column
  justify-content :center
  position :absolute
  top: 1.58rem
  right:0
  bottom:0
  width :.4rem
  color:$bgColor
  .item
    text-align :center
    line-height:.4rem
</style>
