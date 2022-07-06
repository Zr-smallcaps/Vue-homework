<template>
  <div style="padding: 15px">
    <p>选择所在地区(实名认证所在地)</p>
    <el-radio-group v-model="radio">
      <el-radio  :label="3">中国大陆</el-radio>
      <el-radio :label="6">中国香港</el-radio>
    </el-radio-group>
    <div>
      <p>手机号码</p>
    </div>
    <div style="margin-top: 15px">
      <el-input placeholder="请输入内容" v-model="input2">
        <template slot="append" style="margin-left: 20px">
          <el-row>
            <el-button type="primary" style="background-color: rgb(12, 89, 240)"
              >主要按钮</el-button
            >
          </el-row>
        </template>
      </el-input>
    </div>
    <p>登录密码</p>
    <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
    <el-input
      placeholder="在此请输入密码"
      v-model="input"
      show-password
      style="margin-top: 15px"
    ></el-input>
    <p>邀请码(选填)</p>
    <el-input
      placeholder="输入客户经理邀请码"
      v-model="input"
      show-password
    ></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      input1: '',
      input2: '',
      input3: '',
      select: '',
      radio: 3,
    };
  },
};
</script>

<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: rgb(255, 255, 255);
}
p {
  color: darkgrey;
}
</style>
