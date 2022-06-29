<template>
  <div>
    <!-- 1. 事件触发, 无传值, 可以直接获取事件对象
    2. 事件触发, 传值, 需要手动传入$event -->
    <a @click="one" href="http://www.baidu.com">阻止百度</a>
    <br />
    <!-- href="http://www.baidu.com" -->
    <span @click="two(1, $event)">阻止百度</span>
  </div>
</template>

<script>
export default {
  name: 'Change',
  data() {
    return {};
  },
  methods: {
    one() {
      console.log(e);
      e.preventDefault();
    },
    two(value, event) {
      console.log(value);
      console.log(event);
    },
  },
};
</script>

<style></style>
