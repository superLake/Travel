<template>
  <detail-banner :gallaryImg="gallaryImg"></detail-banner>
</template>

<script>
import DetailBanner from './components/Banner'
export default {
  name: 'Datail',
  data () {
    return {
      gallaryImg: [{
        id: 1,
        url: 'http://img1.qunarzz.com/sight/p0/1508/44/c8fb5daa16f5f99f8201f323426b3516.water.jpg_r_800x800_e7642201.jpg'
      }, {
        id: 2,
        url: 'http://img1.qunarzz.com/sight/p0/1508/18/8169b3d719fa1d280eea16d8c72ca069.water.jpg_r_800x800_a0a66301.jpg'
      }]
    }
  },
  components: {
    DetailBanner
  }
}
</script>

<style lang="stylus" scoped>
</style>
