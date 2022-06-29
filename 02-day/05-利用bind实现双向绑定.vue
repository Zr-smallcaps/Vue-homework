<template>
  <div>
    <input type="text" v-model="val1" />
    <br />
    <input type="text" v-bind:value="val2" @input="inputFn" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      val1: '',
      val2: '',
    };
  },
  methods: {
    inputFn(e) {
      this.val1 = e.target.value;
    },
  },
};
</script>

<style></style>
