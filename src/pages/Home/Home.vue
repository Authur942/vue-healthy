<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-main></home-main>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeMain from './components/Main.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeMain
    // HomeIcons
  }
}
</script>
<style lang="stylus" scoped>

</style>
