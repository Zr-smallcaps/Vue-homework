<template>
  <div>
    <span>密码:</span>
    <input type="password" v-model.number="password" />
    <br />
    <span>用户名:</span>
    <input type="text" v-model.trim="username" />
    <br />
    <textarea name="" id="" cols="30" rows="10" v-model.lazy="info"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      username: '',
      info: '',
    };
  },
};
</script>

<style></style>
