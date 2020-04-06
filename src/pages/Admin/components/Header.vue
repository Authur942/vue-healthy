<template>
    <el-header class="header">
          <el-menu
            :default-active="activeIndex1"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#303133"
            text-color="#fff"
            active-text-color="#04B404">
            <el-menu-item index="1">近期更新档案</el-menu-item>
            <el-submenu index="2">
              <template slot="title">疾控中心</template>
              <el-menu-item index="2-1">病例建档</el-menu-item>
              <el-menu-item index="2-2">病例查询</el-menu-item>
              </el-submenu>
                <el-submenu index="3">
                  <template slot="title">处理中心</template>
                  <el-menu-item index="3-1">
                    邮件处理
                    <span class="mark">
                    <el-badge :value="32" :max="30" type="warning" style="margin-left:10px"/>
                    </span>
                  </el-menu-item>
                  <el-menu-item index="3-2">
                    档案审阅
                    <span class="mark">
                      <el-badge :value="12" :max="50" style="margin-left:10px"/>
                    </span>
                  </el-menu-item>
                  <el-menu-item index="3-3">
                    消息提醒
                      <el-badge :value="100" :max="99" type="primary" style="margin-left:10px;"/>
                  </el-menu-item>
                </el-submenu>
              <el-menu-item index="4"><router-link to="/map">疫情地图</router-link></el-menu-item>
              <el-submenu index="5" class="right">
                <template slot="title"><el-avatar> user </el-avatar></template>
                  <el-menu-item index="5-1">管理员&lt;1738238581@qq.com&gt;</el-menu-item>
                  <el-menu-item index="5-2">注销</el-menu-item>
                  <el-menu-item index="5-3">退出</el-menu-item>
              </el-submenu>
          </el-menu>
    </el-header>
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
    .right
      float right
      padding 0 0
</style>
