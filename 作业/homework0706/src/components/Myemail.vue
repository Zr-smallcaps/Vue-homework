<template>
  <el-form ref="form" :model="form" label-width="60px" size="mini">
    <el-form-item label="邮箱" class="em">
      <el-input v-model="form.email"></el-input>
      <el-button type="primary" @click="getCode">获取验证码</el-button>
    </el-form-item>
    <el-form-item label="验证码" class="cd">
      <el-input v-model="form.code"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">立即注册</el-button>
      <el-button @click="cancel">取消注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        code: '',
      },
    };
  },
  methods: {
    getCode() {
      axios
        .get('url', {
          params: {
            email: this.form.email,
          },
        })
        .then(() => {
          this.$message({
            message: '已发送验证码',
            type: 'success',
          });
        })
        .catch(() => {
          this.$message({
            message: '请求超时，请检查网络连接',
            type: 'error',
          });
        });
    },
  },
};
</script>

<style></style>
