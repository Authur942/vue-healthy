<template>
    <el-footer class="footer" height="20px">
      <el-row>
        <el-col :span="24" style="font-size:11px;color:#fff">&nbsp;中大南方医院&nbsp;&#169;&nbsp;版权所有&nbsp;Include&nbsp;AUTHUR MAX&nbsp;,&nbsp;powered&nbsp;by&nbsp;ELEMENT-UI&nbsp;and&nbsp;Vue.</el-col>
      </el-row>
    </el-footer>
</template>
<script>
export default {
  name: 'AdminFooter'
}
</script>
<style lang="stylus" scoped>
  .footer
    padding 0 0
    background #303133
    .el-row
      text-align center
      line-height 20px
</style>
