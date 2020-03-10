<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont header-logo">&#xe744;</div>
    </div>
      <ul>
        <li class="list-item">首页</li>
        <li class="list-item">公司动态</li>
        <li class="list-item">企业文化</li>
        <li class="list-item">疫情防控</li>
        <li class="list-item">全国医疗</li>
        <li class="list-item">医学案例</li>
        <li class="list-item">加入我们</li>
      </ul>
    <div class="header-right">
      <span class="iconfont address-icon">&#xe76b;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
  .header
    display flex
    line-height 1.2rem
    background #49CDA9
    color #ffffff
    .header-left
      float left
      width 7rem
      margin-right 5rem
      .header-logo
        font-size 1.2rem
        color #ffffff
        text-align center
        .header-desc
          font-size .3rem
    .list-item
      flex 1
      height 1.2rem
      // line-height 1.2rem
      display inline-block
      font-size .37rem
      color #ffffff
      margin 0 .4rem
    .header-right
      margin-left 1.5rem
      float right
      width 1rem
      text-align center
      // line-height 1.2rem
      .address-icon
        font-size .55rem
</style>
