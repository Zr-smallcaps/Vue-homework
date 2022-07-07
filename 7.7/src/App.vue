<template>
  <div>
    <MyHeader title="tabbar" />
    <div style="margin-top: 45px">
      <component :is="comName"></component>
    </div>
    <MyTabBar :list="tabList" @changeTab="changeTab"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyTabBar from './components/MyTabBar.vue';
import MyGoodsList from './view/MyGoodsList';
import MyGoodsSearch from './view/MyGoodsSearch.vue';
import MyUserInfo from './view/MyUserInfo.vue';
export default {
  components: { MyHeader, MyTabBar, MyGoodsList, MyGoodsSearch, MyUserInfo },
  data() {
    return {
      comName: 'MyGoodsList',
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
    };
  },
  methods: {
    changeTab(val) {
      this.comName = val;
    },
  },
};
</script>

<style></style>
