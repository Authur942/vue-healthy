<template>
    <el-container direction="vertical">
      <admin-header></admin-header>
      <el-container>
        <admin-aside></admin-aside>
        <admin-main></admin-main>
      </el-container>
      <admin-footer></admin-footer>
    </el-container>
</template>

<script>
import AdminHeader from './components/Header.vue'
import AdminAside from './components/Aside.vue'
import AdminMain from './components/Main.vue'
import AdminFooter from './components/Footer.vue'
export default {
  name: 'admin',
  components: {
    AdminHeader,
    AdminAside,
    AdminMain,
    AdminFooter
  }
}
</script>
<style lang="stylus" scoped>

</style>
