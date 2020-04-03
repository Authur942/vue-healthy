<template>
    <el-main class="main">
      <el-table :data="tableData" stripe="true" height="650">
        <el-table-column prop="ddnum" label="档案ID" width="150">
        </el-table-column>
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 5px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="90">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="90">
        </el-table-column>
        <el-table-column prop="idnumber" label="身份证号" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="180">
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
</template>
<script>
export default {
  name: 'AdminMain',
  data () {
    return {
      tableData: [{
        ddnum: '02105265f',
        date: '2016-05-02',
        sex: '男',
        name: '王小明',
        age: '32',
        idnumber: '441426xxxxxxxx0030',
        address: '上海市普陀区金沙江路 1517 弄',
        take: '<span style="margin-right:5px"><a href="">编辑</a></span><span style="margin-right:5px"><a href="">删除</a></span><span><a href="">详情</a></span>'
      }, {
        ddnum: '02105265f',
        date: '2016-05-02',
        sex: '男',
        name: '王小明',
        age: '32',
        idnumber: '441426xxxxxxxx0030',
        address: '上海市普陀区金沙江路 1517 弄',
        take: '<span style="margin-right:5px"><a href="">编辑</a></span><span style="margin-right:5px"><a href="">删除</a></span><span><a href="">详情</a></span>'
      }, {
        ddnum: '02105265f',
        date: '2016-05-02',
        sex: '男',
        name: '王小明',
        age: '32',
        idnumber: '441426xxxxxxxx0030',
        address: '上海市普陀区金沙江路 1517 弄',
        take: '<span style="margin-right:5px"><a href="">编辑</a></span><span style="margin-right:5px"><a href="">删除</a></span><span><a href="">详情</a></span>'
      }, {
        ddnum: '02105265f',
        date: '2016-05-02',
        sex: '男',
        name: '王小明',
        age: '32',
        idnumber: '441426xxxxxxxx0030',
        address: '上海市普陀区金沙江路 1517 弄',
        take: '<span style="margin-right:5px"><a href="">编辑</a></span><span style="margin-right:5px"><a href="">删除</a></span><span><a href="">详情</a></span>'
      }, {
        ddnum: '02105265f',
        date: '2016-05-02',
        sex: '男',
        name: '王小明',
        age: '32',
        idnumber: '441426xxxxxxxx0030',
        address: '上海市普陀区金沙江路 1517 弄',
        take: '<span style="margin-right:5px"><a href="">编辑</a></span><span style="margin-right:5px"><a href="">删除</a></span><span><a href="">详情</a></span>'
      }, {
        ddnum: '02105265f',
        date: '2016-05-02',
        sex: '男',
        name: '王小明',
        age: '32',
        idnumber: '441426xxxxxxxx0030',
        address: '上海市普陀区金沙江路 1517 弄',
        take: '<span style="margin-right:5px"><a href="">编辑</a></span><span style="margin-right:5px"><a href="">删除</a></span><span><a href="">详情</a></span>'
      }, {
        ddnum: '02105265f',
        date: '2016-05-02',
        sex: '男',
        name: '王小明',
        age: '32',
        idnumber: '441426xxxxxxxx0030',
        address: '上海市普陀区金沙江路 1517 弄',
        take: '<span style="margin-right:5px"><a href="">编辑</a></span><span style="margin-right:5px"><a href="">删除</a></span><span><a href="">详情</a></span>'
      }, {
        ddnum: '02105265f',
        date: '2016-05-02',
        sex: '男',
        name: '王小明',
        age: '32',
        idnumber: '441426xxxxxxxx0030',
        address: '上海市普陀区金沙江路 1517 弄',
        take: '<span style="margin-right:5px"><a href="">编辑</a></span><span style="margin-right:5px"><a href="">删除</a></span><span><a href="">详情</a></span>'
      }, {
        ddnum: '02105265f',
        date: '2016-05-02',
        sex: '男',
        name: '王小明',
        age: '32',
        idnumber: '441426xxxxxxxx0030',
        address: '上海市普陀区金沙江路 1517 弄',
        take: '<span style="margin-right:5px"><a href="">编辑</a></span><span style="margin-right:5px"><a href="">删除</a></span><span><a href="">详情</a></span>'
      }, {
        ddnum: '02105265f',
        date: '2016-05-02',
        sex: '男',
        name: '王小明',
        age: '32',
        idnumber: '441426xxxxxxxx0030',
        address: '上海市普陀区金沙江路 1517 弄',
        take: '<span style="margin-right:5px"><a href="">编辑</a></span><span style="margin-right:5px"><a href="">删除</a></span><span><a href="">详情</a></span>'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .el-main
    height 650px
    padding 0 0
</style>
