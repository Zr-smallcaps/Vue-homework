<template>
  <div>
    <div>
      <p>选择你的邮箱</p>
      QQ： <slot name="yx"></slot>
    </div>
    <div>
      <span>邮箱密码</span><slot name="yxmm"></slot><br>
      <span>确认密码</span><slot name="que"></slot>
    </div>
    <el-button type="success" disabled>成功按钮</el-button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
