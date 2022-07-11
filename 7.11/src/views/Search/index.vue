<template>
  <div class="search-container">
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model.trim="searchHotWord"
    />
    <template v-if="this.searchHotWord.length == 0">
      <!-- 热门搜索 -->
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          v-for="(item, index) in searchList"
          :key="index"
          size="large"
          plain
          round
          type="primary"
          @click="clickFn(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>
    <template v-else>
      <!-- 最佳匹配 -->
      <van-cell title="最佳匹配" />
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in searchHotWordList"
          :key="item.id"
          :title="item.name"
        />
      </van-list>
    </template>
  </div>
</template>
<script>
import { getSearchListAPI, getSearchHotWordListAPI } from "@/api";
export default {
  data() {
    return {
      searchList: [],
      searchHotWord: "",
      loading: false,
      finished: false,
      searchHotWordList: [],
    };
  },
  mounted() {
    this.getTagList();
  },
  methods: {
    async getTagList() {
      try {
        const res = await getSearchListAPI();
        // console.log(res.data.result.hots);
        this.searchList = res.data.result.hots;
      } catch {
        console.log("获取数据失败");
      }
    },
    async clickFn(value) {
      this.searchHotWord = value;
      try {
        const res = await getSearchHotWordListAPI({
          keywords: value,
        });
        this.searchHotWordList = res.data.result.songs;
        this.$toast.success("成功文案");
      } catch {
        console.log("热词表单获取失败");
        this.$toast.fail("失败文案");
      }
    },
    onLoad() {},
  },
};
</script>
<style lang="less">
.search-container {
  .van-tag--round {
    margin-right: 10px;
    margin-left: 10px;
  }
  .van-tag--primary.van-tag--plain {
    color: rgb(79, 75, 75) !important;
    border-color: rgb(60, 58, 58) !important;
  }
}
</style>