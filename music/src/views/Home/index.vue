<template>
  <div class="home-container">
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in list" :key="item.id">
        <van-image
          width="111"
          height="100"
          :src="item.picUrl"
        />
        <p class="music-name van-multi-ellipsis--l2">
          {{ item.name }}
        </p>
      </van-grid-item>
    </van-grid>
    <van-cell title="最新歌单" class="title" />
    <van-cell
      v-for="item in newlist"
      :key="item.id"
      :label="item.song.artists[0].name"
      :title="item.name"
    >
      <template>
        <van-icon
          color="#000"
          name="play-circle-o"
          size="28"
        />
      </template>
    </van-cell>
  </div>
</template>

<script>
import {
  getRecommendListApi,
  getNewSongListApi,
} from '@/apis';
export default {
  name: 'VueMusicIndex',

  data() {
    return {
      list: [],
      newlist: [],
      loading: false,
      finished: false,
    };
  },

  mounted() {
    this.getList();
    this.newList();
  },

  methods: {
    async newList() {
      try {
        const res = await getNewSongListApi({});
        this.newlist = res.data.result;
        // console.log(res);
      } catch (e) {
        console.log('cuowu', e);
      }
    },
    async getList() {
      try {
        const res = await getRecommendListApi({
          limit: 6,
        });
        this.list = res.data.result;
        console.log(res);
      } catch (e) {
        console.log('cuowu', e);
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

<style lang="less" scoped>
.home-container {
  .title {
    background-color: #c71d24;
    color: #fff;
  }

  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }

  /deep/.van-grid-item__content {
    padding: 10px 0px;
  }
}
</style>
