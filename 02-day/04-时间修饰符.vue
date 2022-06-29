<template>
  <div @click="fatherFn">
    <span @click="one">正常</span>
    <span @click.stop="one">阻止事件冒泡</span>
    <a @click.prevent="two" href="http://www.baidu.com">点击去csdn</a>
    <button @click.once="btn">
      once:程序只会运行一次，只会触发一次函数调用
    </button>
  </div>
</template>

<script>
export default {
  name: 'Change',
  data() {
    return {};
  },
  methods: {
    fatherFn() {
      console.log('fatherFn');
    },
    one() {
      console.log('阻止事件冒泡');
    },
    two() {
      console.log('阻止了链接跳转');
    },
    btn() {
      console.log('once');
    },
  },
};
</script>

<style></style>
