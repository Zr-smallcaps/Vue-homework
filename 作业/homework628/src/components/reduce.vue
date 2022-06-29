<template>
  <div>
    <button @click="sum">求和数组</button>
    <button @click="res">计算字符出现的个数</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: 'adsdsadadaddd',
    };
  },
  methods: {
    sum() {
      let sum = 0;
      let arr = [{ a: 100 }, { a: 20 }, { a: -10 }].reduce(function (previousValue, currentValue, arr) {
        return previousValue + currentValue.a;
      }, sum);
      console.log(arr);
      alert(arr);
    },
    res() {
      let str1 = this.str.split('');
      let res = {};
      str1.reduce(function (res, c) {
        res[c] ? res[c]++ : (res[c] = 1);
        return res;
      }, res);
      console.log(res);
    },
  },
};
</script>

<style></style>
