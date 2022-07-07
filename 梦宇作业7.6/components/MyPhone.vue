<template>
  <div>
    <template>
    <h6>选择所在地区(实名认证主体所在地)</h6>    
  <el-radio  v-model="radio" label="1">中国大陆</el-radio>
  <el-radio  v-model="radio" label="2">中国香港</el-radio>
<h1></h1>

  <div>
  <el-input placeholder="输入手机号码" v-model="input1">
    <template slot="prepend">+86</template>
  </el-input>
</div>
<h1></h1>

<el-input  class="ww" v-model="input" placeholder="输入验证码"></el-input>

  <el-button type="primary">发送验证码</el-button>

 <h4>登录密码</h4>
 <el-input class="Width" v-model="input4" type="password" placeholder="**********"></el-input>
 <h1></h1>
 <el-input  class="Width" v-model="input2" placeholder="再次输入登录密码"></el-input>
 <h1></h1>
 <h4>邀请码(选填)</h4>
 <el-input  class="Width" v-model="input3" placeholder="输入客户经理邀请码"></el-input>
</template>
  </div>
</template>

<script>
export default {
   data () {
      return {
          input: '',
        radio: '1',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      select: ''
      };
    }
}
</script>

<style>
.ww{
    width: 50%;
}
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .Width{
    width: 80%;
  }
</style>