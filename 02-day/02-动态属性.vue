<template>
  <!-- 1. 绑定事件
  语法: v-on:事件名="少量代码"
  语法: v-on:事件名="methods里函数名"
  语法: v-on:事件名="methods里函数名(值)"
  语法: @事件名="methods里函数名"
  -->
  <div>
    <p>商品总数: {{ count }}</p>
    <button @click="count++">点击加1</button>
    <button v-on:click="addFn1">点击加1</button>
    <button v-on:click="addFn2">点击加5</button>
    <button v-on:click="addFn3">点击减1</button>
  </div>
</template>

<script>
export default {
  name: 'Change',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addFn1() {
      this.count++;
      console.log(this)
    },
    addFn2() {
      this.count += 5;
    },
    addFn3() {
      this.count -= 1;
    },
  },

};
</script>

<style></style>
