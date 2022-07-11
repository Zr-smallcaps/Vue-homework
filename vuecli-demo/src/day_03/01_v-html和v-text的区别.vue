<template>
  <div>
    {{ str }}
    <!-- v- html 可以识别html表签 -->
    <h1 v-html="str"></h1>
    <!-- v-text 可以把变量里的内容当成文本来处理-->
    <h1 v-text="str"></h1>

    <!-- v-html/v-text 会把插值表达式的内容覆盖掉 -->
    <h1 v-html="str">{{ str }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "<span>我是一个span</span>",
    };
  },
};
</script>

<style></style>
