<template>
  <el-container>
    <el-header class="header">
      <el-menu
        :default-active="activeIndex1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#409EFF">
        <el-menu-item index="1" class="title">电子健康档案管理系统</el-menu-item>
        <el-submenu index="2">
          <template slot="title">处理中心</template>
          <el-menu-item index="2-1">病例建档</el-menu-item>
          <el-menu-item index="2-2">病例查询</el-menu-item>
          <el-menu-item index="2-3">疾控中心</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">疫情防控</template>
              <el-menu-item index="2-4-1">疑似群体</el-menu-item>
              <el-menu-item index="2-4-2">确诊群体</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">数据统计</a></el-menu-item>
          <el-submenu index="5" class="right">
            <template slot="title"><i class="el-icon-user" style="font-size:30px;color:#fff"></i></template>
              <el-menu-item index="5-1">管理员&lt;1738238581@qq.com&gt;</el-menu-item>
              <el-menu-item index="5-2">注销</el-menu-item>
              <el-menu-item index="5-3">退出</el-menu-item>
          </el-submenu>
      </el-menu>
    </el-header>
  </el-container>
</template>

<script>
export default {
  name: 'AdminHeader',
  data () {
    return {
      activeIndex1: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .header
    padding 0 0
    .title
      font-size 20px
    .right
      float right
</style>
