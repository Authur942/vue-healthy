<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
    <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
    <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583860571005&di=ee29d713ab2973bf17d5f194089a8883&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170221%2F21042cb6b6b5441eaf49da353c63b75c_th.jpeg'
      }, {
        id: '002',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583860571005&di=ee29d713ab2973bf17d5f194089a8883&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170221%2F21042cb6b6b5441eaf49da353c63b75c_th.jpeg'
      }, {
        id: '003',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583860571005&di=ee29d713ab2973bf17d5f194089a8883&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170221%2F21042cb6b6b5441eaf49da353c63b75c_th.jpeg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    color #ffffff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 43%
    background #ffffff
    .swiper-img
      width 100%
</style>
