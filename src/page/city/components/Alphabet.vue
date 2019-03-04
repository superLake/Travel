<template>
  <ul class="list">
    <li class="item"
        v-for="key of letters"
        :key="key"
        :ref="key"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="clickHandler"
    >{{key}}</li>
  </ul>
</template>
<script>
export default{
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      timer: null
    }
  },
  computed: {
    letters () {
      const letter = []
      for (let i in this.cities) {
        letter.push(i)
      }
      return letter
    }
  },
  methods: {
    clickHandler (e) {
      // console.log(e.target.innerHTML)
      this.$emit('change', e.target.innerHTML)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove () {
      if (this.touchStatus) {
        // 1、获得a字母到App顶部的距离X，
        // 2、再获取鼠标到App顶部的距离Y，
        // 3、然后两个距离作差除以每个字母的高度h，取整就能获得目前鼠标悬停在那个数组元素的下标index
        // index=Y-X/h
        // offsetTop获取的是当前元素顶部到该元素所在盒子模型的顶部的高度
        const startY = this.$refs['A'][0].offsetTop
        // element.touches[0].clientY是光标所在位置到App顶部的高度
        const touchY = arguments[0].touches[0].clientY - 79
        const index = Math.floor((touchY - startY) / 20)
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 30)
        // console.log(Math.floor((touchY - startY - 79) / 20))
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
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
