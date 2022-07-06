<template>
  <div>
    <div class="container" v-show="isShow">
      <slot name="content">默认内容</slot>
    </div>
  </div>
</template>

<script>
// 目标: 组件具名插槽使用 - 有名字的插槽
// 1. 组件内 <slot name="插槽的名字"></slot> 占位
// 2. 使用组件, v-slot:插槽的名字+template  ==> 可以让特定的内容在特定的插槽内展示

export default {
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style scoped>
img {
  width: 50%;
}
</style>
