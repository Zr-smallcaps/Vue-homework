<template>
  <div>
    <MyHeader
      title="SmallCapsShopCar"
      backgroundColor="pink"
      color="purple"
    ></MyHeader>
    <MyGoods
      style="margin-top: 45px"
      v-for="item in list"
      :key="item.id"
      :item="item"
    ></MyGoods>
    <MyFooter :list="list" @checkoutAll="checkoutAll"></MyFooter>
  </div>
</template>

<script>
//引入组件

import MyGoods from './components/MyGoods.vue';
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
export default {
  name: 'App',
  data() {
    return {
      list: [],
    };
  },
  components: {
    MyHeader,
    MyFooter,
    MyGoods,
  },
  created() {
    this.$axios({
      url: '/api/cart',
      //get请求是 params
      //post请求是data
    }).then((res) => {
      this.list = res.data.list;
      console.log(this.list);
    });
  },
  methods: {
    checkoutAll(flag) {
        this.list.forEach((item) => {
          item.goods_state = flag;
        });
    },
  },
};
</script>
<style lang="css"></style>
