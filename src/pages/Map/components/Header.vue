<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont header-logo">电子健康档案管理系统</div>
    </div>
      <ul>
        <router-link to="/admin"><li class="list-item">返回后台</li></router-link>
        <li class="list-item">疫情地图</li>
        <li class="list-item">疫情动态</li>
        <li class="list-item">防控进度</li>
        <li class="list-item">最新报道</li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'MapHeader'
}
</script>
<style lang="stylus" scoped>
  .header
    // width 100%
    display flex
    line-height 1.2rem
    background #B22222
    color #ffffff
    margin-bottom 20px
    // position fixed
    .header-left
      float left
      width 30%
      .header-logo
        font-size .6rem
        color #ffffff
        text-align center
        .header-desc
          font-size .3rem
    .list-item
      display inline-block
      font-size .37rem
      color #ffffff
      margin 0 .5rem
    .header-right
      flex 1
      float right
      text-align center
      .address-icon
        font-size .55rem
</style>
