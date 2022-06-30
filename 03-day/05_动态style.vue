<template>
  <div>
    <p v-bind:style="{ color: 'red', fontSize: '80px' }">smallcaps</p>
    <p v-bind:style="{ color: thisColor, fontSize: '80px' }">smallcaps</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      thisColor: 'purple',
    };
  },
  beforeMount() {
    console.log(this);
  },
};
</script>

<style></style>
