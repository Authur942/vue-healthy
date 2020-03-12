<template>
  <div>
    <admin-header></admin-header>
    <admin-aside></admin-aside>
  </div>
</template>

<script>
import AdminHeader from './components/Header.vue'
import AdminAside from './components/Aside.vue'
export default {
  name: 'admin',
  components: {
    AdminHeader,
    AdminAside
  }
}
</script>
<style lang="stylus" scoped>

</style>
