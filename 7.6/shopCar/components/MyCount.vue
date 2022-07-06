<template>
  <div class="my-counter">
    <button
      type="button"
      :disabled="item.goods_count <= 1"
      class="btn btn-light"
      @click="item.goods_count--"
    >
      -
    </button>
    <input type="number" class="form-control inp" v-model="item.goods_count" />
    <button type="button" class="btn btn-light" @click="item.goods_count++">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    item: {
      depp: true,
      handler(val){
        if(val.goods_count<0){
           val.goods_count=1 
        }

      }
    },
  },
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>
