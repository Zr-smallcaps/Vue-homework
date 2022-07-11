<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="value"
    ></van-search>
    <!-- 热门搜索 -->

    <template v-if="searchList.length == 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          color="#ccc"
          text-color="#000"
          size="large"
          plain
          round
          type="primary"
          v-for="(item, index) in tags"
          :key="index"
          style="margin-right: 6px"
          @click="clickFn(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>

    <van-cell title="最佳匹配" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in searchList"
        :key="item.id"
        :title="item.name"
        :label="`${item.ar[0].name}-${item.name}`"
      />
    </van-list>
  </div>
</template>

<script>
import {
  getSearchTagApi,
  getSearchListApi1,
} from '@/apis';
export default {
  name: 'VueMusicIndex',

  data() {
    return {
      tags: [],
      value: '',
      list: [],
      loading: false,
      finished: true,
      searchList: [],
    };
  },

  created() {
    this.getTagList();
  },
  methods: {
    async getTagList() {
      try {
        const res = await getSearchTagApi();
        this.tags = res.data.result.hots;
        console.log(res);
        console.log(res);
      } catch (err) {
        console.log('获取热门数据失败');
      }
    },
    async clickFn(val) {
      // console.log(val);
      try {
        this.value = val;
        const res = await getSearchListApi1({
          keywords: this.value,
        });
        console.log(res);
        this.searchList = res.data.result.songs;
        this.$toast.success('成功文案');
      } catch (err) {
        console.log();
        this.$toast.fail('失败案例');
      }
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
</script>
