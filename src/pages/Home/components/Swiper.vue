<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
    <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
        <p class="swiper-desc">{{item.desc}}</p>
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
        autoplay: 5000
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583860571005&di=ee29d713ab2973bf17d5f194089a8883&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170221%2F21042cb6b6b5441eaf49da353c63b75c_th.jpeg',
        desc: '记录您的健康，让“健康”随身行'
      }, {
        id: '002',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583885403945&di=92f9421ab1c4947db6197976231e9c96&imgtype=0&src=http%3A%2F%2Fzzrytyl.com%2Fpublic%2Fuploads%2Fbanner%2F20190309%2Fb9c118cd413dd772f3de668f6ce4d632.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #ffffff
  .wrapper
    position relative
    overflow hidden
    // margin 0 auto
    width 100%
    height 0
    padding-bottom 23%
    background #ffffff
    .swiper-img
      width 100%
    .swiper-desc
      position absolute
      top 1rem
      left 10rem
      font-size .7rem
</style>
