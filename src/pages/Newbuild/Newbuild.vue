<template>
  <div class="main-box">
    <el-page-header @back="goBack" content="新建档案" class="header">
    </el-page-header>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="80px" class="form-main">
        <el-row>
          <el-col :span="6">
            <el-form-item label="姓名">
              <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="身份证号">
              <el-input v-model="form.number" placeholder="联系人电话"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="联系电话" >
              <el-input v-model="form.number" placeholder="个人身份ID"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="紧急电话" >
              <el-input v-model="form.number" placeholder="个人身份ID"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col span="14">
            <el-form-item label="籍贯">
              <el-select v-model="form.region" placeholder="请选择省份">
                <el-option label="广东省" value="shanghai"></el-option>
                <el-option label="湖南省" value="beijing"></el-option>
                <el-option label="湖南省" value="beijing"></el-option>
                <el-option label="湖南省" value="beijing"></el-option>
              </el-select>
              <el-select v-model="form.region" placeholder="请选择市级">
                <el-option label="广州市" value="shanghai"></el-option>
                <el-option label="广州市" value="beijing"></el-option>
                <el-option label="广州市" value="beijing"></el-option>
                <el-option label="广州市" value="beijing"></el-option>
              </el-select>
              <el-select v-model="form.region" placeholder="请选择地区">
                <el-option label="天河区" value="shanghai"></el-option>
                <el-option label="天河区" value="beijing"></el-option>
                <el-option label="天河区" value="beijing"></el-option>
                <el-option label="天河区" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col span="10">
            <el-form-item label="县镇/街道">
              <el-input v-model="form.address" placeholder="请输入详细地址"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="出生日期">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="建档日期">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <el-form-item label="首次建档">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="是否重患">
              <el-switch v-model="form.serious"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="是否参保">
              <el-switch v-model="form.canbao"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="患者性质">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="婴幼儿" name="type"></el-checkbox>
                <el-checkbox label="心脑血管病" name="type"></el-checkbox>
                <el-checkbox label="普通流感" name="type"></el-checkbox>
                <el-checkbox label="孤立人群" name="type"></el-checkbox>
                <el-checkbox label="残疾人" name="type"></el-checkbox>
                <el-checkbox label="老年人" name="type"></el-checkbox>
                <el-checkbox label="三岁以上儿童" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="">
              <el-radio-group v-model="form.resource">
                <el-radio label="社会保障人群"></el-radio>
                <el-radio label="国家扶贫对象"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="14">
            <el-form-item label="特殊备注">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" :offset="8">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button type="warning">取消</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Newbuild',
  data() {
    return {
      form: {
      name: '',
      number: '',
      idnum:'',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      serious: false,
      canbao: false,
      type: [],
      resource: '',
      desc: ''
      }
    }
  },
  methods: {
    goBack() {
      console.log('go back');
      window.history.back();
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
<style lang="stylus" scoped>
.main-box
  // padding 0 300px
  .header
    padding-left 20px
    width 100%
    height 70px
    line-height 70px
    border-left 1px solid #303133
    border-right 1px solid #303133
    border-bottom 1px solid #eeeeee
    background #303133
    color #ffffff
  .header >>> .el-page-header__content
    color #ffffff
  .form-box
    border-left 1px solid #303133
    border-right 1px solid #303133
    // border-bottom 1px solid #303133
    padding-top 20px
    width 100%
    .form-main
      padding-left 50px
    .form-main >>> .el-input__inner
      width 250px
</style>