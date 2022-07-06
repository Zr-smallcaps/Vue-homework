<template>
  <div class="add">
    <div>
      <p>选择所在地区（实名认证主体所在地）</p>
      <el-radio v-model="radio" label="1">中国大陆</el-radio>
      <el-radio v-model="radio" label="2">中国台湾</el-radio>
    </div>
    <div>
      <p>手机号码</p>
      <slot name='sj'></slot>
    </div>
    <div>
      <p>登录密码</p>
      <slot name='dl'></slot>
    </div>
    <div>
      <p>邀请码</p>
      <slot name='yao'></slot>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    radio: '1'
  }
}
}
</script>

<style scoped>
.add{
margin: 0 auto;
}
</style>
