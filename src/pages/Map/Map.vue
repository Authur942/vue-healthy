<template>
  <div class="MapBox">
    <map-header></map-header>
    <map-carousel></map-carousel>
    <map-main></map-main>
    <map-about></map-about>
    <map-footer></map-footer>
  </div>
</template>
<script>
import MapHeader from './components/Header.vue'
import MapMain from './components/Main.vue'
import MapAbout from './components/About.vue'
import MapFooter from './components/Footer.vue'
import MapCarousel from './components/Carousel.vue'

export default {
  name: 'Map',
  components: {
    MapHeader,
    MapMain,
    MapCarousel,
    MapAbout,
    MapFooter
  }
}
</script>
<style lang="stylus" scoped>

</style>