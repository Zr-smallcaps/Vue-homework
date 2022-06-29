<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img
        src="../assets/01.jpg"
        alt=""
        @mouseover="getUrl(1)"
        @click="clickFn(1, $event)"
      />
      <img
        src="../assets/02.jpg"
        alt=""
        @mouseover="getUrl(2)"
        @click="clickFn(2, $event)"
      />
      <img
        src="../assets/03.jpg"
        alt=""
        @mouseover="getUrl(3)"
        @click="clickFn(3, $event)"
      />
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img :src="currentUrl" alt="" style="width: 600px; height: auto" />
    </div>
    <div></div>
  </div>
</template>

<script>
import imgUrl01 from '../assets/01.jpg';
import imgUrl02 from '../assets/02.jpg';
import imgUrl03 from '../assets/03.jpg';
export default {
  data() {
    return {
      currentUrl: imgUrl01,
      imageurl: { 1: imgUrl01, 2: imgUrl02, 3: imgUrl03 },
    };
  },
  methods: {
    getUrl(index) {
      this.currentUrl = this.imageurl[index];
    },
    clickFn(index, event) {
      alert(`你点击了第${index}-- and --${event.target.src}`);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.imglist {
  border: 2px solid red;
}
.imglist img {
  width: 200px;
  height: auto;
}
.show {
  border: 2px solid red;
  margin-right: 20px;
}
</style>
