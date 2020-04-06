<template>
    <el-main class="main">
      <el-table :data="tableData" stripe="true" height="615" class="main-table">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="ddnum" label="档案ID" width="120" fixed="left">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120" fixed="left">
        </el-table-column>
        <el-table-column label="建档日期" width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 5px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="出生年月" width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 5px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="80">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="80">
        </el-table-column>
        <el-table-column prop="idnumber" label="身份证号" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="210">
        </el-table-column>
        <el-table-column label="操作" width="160" fixed="right">
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
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </el-main>
</template>
<script>
export default {
  name: 'AdminMain',
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleDelete() {
        this.$confirm('此操作将永久删除该条信息, 是否继续?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
    },
  data () {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
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
    // .main-table::-webkit-scrollbar
    //   width 5px
    //   height 10px
    // /* 滚动条的滑块 */
    // .main-table::-webkit-scrollbar-thumb
    //   background-color #a1a3a9
    //   border-radius 10px
    // .main-table::-webkit-scrollbar-track
    //   border-radius 0px /*滚动条的背景区域的圆角*/
    //   background-color #303133 /*滚动条的背景颜色*/
    .block
      text-align center
</style>
