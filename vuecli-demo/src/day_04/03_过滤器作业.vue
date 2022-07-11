<template>
  <div>
    <h2>使用同一个过滤器处理 1876986 粉丝数量</h2>
    <p>国内网站粉丝数量：{{ Fans | FansNum(this.flag) }}</p>
    <br />
    <p>外国网站粉丝数量：{{ Fans | FansNum(this.flag1) }}</p>

    <h2>使用同一个过滤器处理 1636450540055 时间戳</h2>
    <p>时间：{{ time | format(this.flag) }}</p>
    <br />
    <p>时间：{{ time | format(this.flag1) }}</p>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      flag: false,
      flag1: true,
      Fans: "1876986",
      time: Number(1636450540055),
    };
  },
  filters: {
    FansNum(arg, flag) {
      if (flag == false) {
        const num = arg / 10000;
        const realval = parseFloat(num).toFixed(4);
        return realval + "万";
      } else {
        const num = arg / 1000;
        const realval = parseFloat(num).toFixed(3);
        return realval + "千";
      }
    },
    format(val, flag) {
      if (flag == false) {
        return moment(val).format("YYYY-MM-DD");
      } else {
        return moment(val).format("YYYY/MM/DD");
      }
    },
  },
};
</script>

<style></style>
