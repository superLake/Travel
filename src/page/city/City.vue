<template>
  <div>
    <city-header></city-header>
    <city-search :cities="citiesList"></city-search>
    <city-list :hotCities="hotCitiesList" :cities="citiesList" :letters="letters"></city-list>
    <city-alphabet :cities="citiesList" @change="changeHandler"></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default{
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCitiesList: [],
      citiesList: {},
      letters: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('./api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc: function (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCitiesList = data.hotCities
        this.citiesList = data.cities
      }
    },
    changeHandler: function (letter) {
      this.letters = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped>

</style>
