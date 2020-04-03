<template>
    <el-container>
      <admin-aside></admin-aside>
      <el-container direction="vertical">
        <admin-header></admin-header>
        <admin-main></admin-main>
        <admin-footer></admin-footer>
      </el-container>
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
