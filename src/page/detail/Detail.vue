<template>
  <div>
    <detail-banner :gallaryImg="gallaryImg"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
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
      }],
      list: [
        {
          title: '成人票',
          children: [{
            title: '一日三馆票',
            children: [{
              title: '一日三馆票-淘宝票'
            }]
          }, {
            title: '一日五馆票'
          }, {
            title: '两日五馆票'
          }]
        },
        {
          title: '学生票'
        },
        {
          title: '儿童票'
        }
      ]
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="stylus" scoped>
.content{
  height:30rem
}
</style>
