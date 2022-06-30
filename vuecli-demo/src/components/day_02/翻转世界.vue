<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="btn">反转</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello world",
    };
  },
  methods: {
    btn() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
</script>

<style>
</style>