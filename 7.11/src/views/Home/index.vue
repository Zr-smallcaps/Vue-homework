<template>
  <div class="home-container">
    <van-cell :border="false" title="推荐歌单" class="title" />
    <van-row gutter="6">
      <van-col span="8" v-for="item in recommendList" :key="item.id">
        <van-image width="100%" height="100%" fit="cover" :src="item.picUrl" />
        <p class="music-name">{{ item.name }}</p>
      </van-col>
    </van-row>
    <van-cell title="最新歌单" class="title" />
    <van-cell
      v-for="item in newMusicList"
      :key="item.id"
      :label="`${
        (item.song && item.song.artists[0] && item.song.artists[0].name) ||
        '未知歌手'
      }-${item.name}`"
      :title="item.name"
    >
      <template>
        <van-icon color="#000" name="play-circle-o" size="28" />
      </template>
    </van-cell>
  </div>
</template>

<script>
import { getRecommendListAPI, getNewMusicListAPI } from "@/api/index";
export default {
  data() {
    return {
      title: "",
      recommendList: [],
      newMusicList: [],
    };
  },
  mounted() {
    this.getList();
    this.getNewList();
  },
  methods: {
    async getList() {
      try {
        const res = await getRecommendListAPI({ limit: 6 });
        // console.log(res);
        this.recommendList = res.data.result;
        // console.log(this.recommendList);
      } catch {
        console.log("获取数据失败");
      }
    },
    async getNewList() {
      try {
        const res = await getNewMusicListAPI({ limit: 10 });
        // console.log("newMusicList", res);
        this.newMusicList = res.data.result;
        // console.log("newMusicList", this.newMusicList);
      } catch {
        console.log("获取数据失败");
      }
    },
  },
};
</script>

<style lang="less">
.home-container {
  .title {
    background-color: #494646;
    color: #fff;
    margin-bottom: 10px;

    .newMusic {
      padding-top: 10px;
    }
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
  .van-cell__value {
    padding-top: 10px;
  }
  .van-cell__title {
    flex: 3;
  }
}
</style>