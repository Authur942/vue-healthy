<template>
    <el-aside width="240px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- 社区管理 -->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-office-building"></i>
            <span>社区管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">近期迁入人群</template>
            <el-menu-item index="1-1">建立记录</el-menu-item>
            <el-menu-item index="1-2">定期随访</el-menu-item>
            <el-menu-item index="1-2">人员信息管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="长居人群">
            <el-menu-item index="1-3">家庭信息管理</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <!-- 儿童保健 -->
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-link"></i>
            <span>儿童保健管理</span>
          </template>
            <el-menu-item index="2-1">新生儿建档</el-menu-item>
            <el-menu-item index="2-1">婴儿科</el-menu-item>
            <el-menu-item index="2-2">儿童科</el-menu-item>
            <el-menu-item index="2-3">信息管理</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <!-- 妇女保健 -->
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-female"></i>
            <span>妇女保健管理</span>
          </template>
            <el-menu-item index="3-1">孕妇科</el-menu-item>
            <el-menu-item index="3-2">妇女科</el-menu-item>
            <el-menu-item index="3-3">信息管理</el-menu-item>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <!-- 重点人群 -->
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-aim"></i>
            <span>重点人群管理</span>
          </template>
            <el-menu-item index="4-1">老年人档案管理</el-menu-item>
            <el-menu-item index="4-2">高血压档案管理</el-menu-item>
            <el-menu-item index="4-3">糖尿病档案管理</el-menu-item>
            <el-menu-item index="4-3">残疾人档案管理</el-menu-item>
        </el-submenu>
        <!-- 管理设置 -->
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>设置</span>
          </template>
            <el-menu-item index="5-1">管理人员设置</el-menu-item>
            <el-menu-item index="5-2">权限更改设置</el-menu-item>
            <el-menu-item index="5-3">权限级别信息</el-menu-item>
        </el-submenu>
        <el-menu-item index="6">
          <i class="el-icon-warning-outline"></i>
          <span slot="title">关于</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
</template>
<script>
export default {
  name: 'AdminAside',
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .el-menu-vertical-demo
    height 610px
</style>
