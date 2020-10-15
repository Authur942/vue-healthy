<template>
    <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in 3" :key="item">
      <!-- <h3 class="medium">{{ item }}</h3> -->
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: 'MapCarousel'
}
</script>
<style lang="stylus" scoped>
.el-carousel__item h3 
  color #475669
  font-size 14px
  opacity 0.75
  line-height 400px
  margin 0
  
.el-carousel__item:nth-child(2n) 
  background-image url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586276209401&di=0aec0b698fb810e752ec69851431385b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200129%2F66c2ba305ba84c799e2b993404ba4bf8.jpeg')
  background-repeat no-repeat 
  background-position left top
  background-size 100%


.el-carousel__item:nth-child(2n+1)
  background-image url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586276209401&di=0aec0b698fb810e752ec69851431385b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200129%2F66c2ba305ba84c799e2b993404ba4bf8.jpeg')
  background-repeat no-repeat 
  background-position left top
  background-size 100%
  
</style>