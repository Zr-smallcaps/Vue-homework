<template>
  <div>
    <h3>国内网站：粉丝数量：{{ msg | filterA(this.flag) }}万</h3>
    <h3>国外网站：粉丝数量：{{ msg | filterA(this.flag1) }}千</h3>

    <h3>时间：{{ time | filterB(this.flag) }}</h3>
    <h3>时间：{{ time | filterB(this.flag1) }}</h3>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      msg: 1876986,
      flag: false,
      flag1: true,
      time: 1636450540055,
    };
  },

  filters: {
    filterA: function (x, y) {
      if (y == false) {
        return x / 10000;
      } else {
        return x / 1000;
      }
    },
    filterB: function (x, y) {
      if (y == false) {
        return moment(x).format('YYYY-MM-DD');
      } else {
        return moment(x).format('YYYY/MM/DD');
      }
    },
  },
};
</script>

<style></style>
