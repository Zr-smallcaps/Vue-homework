<template>
  <div>
    <input type="text" v-bind:value="val" @input="inputFn" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: '',
    };
  },
  methods: {
    inputFn(e) {
      this.val = e.target.value;
    },
  },
};
</script>

<style></style>
