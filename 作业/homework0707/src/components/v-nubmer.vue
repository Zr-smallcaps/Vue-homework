<template>
  <div id="app">
    <input type="text" v-model="qwa" v-number name="" id="" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      qwa: '',
    };
  },
  directives: {
    number: {
      inserted(el, binding, vnode) {
        el.value = el.value.replace(/[^\d.]/g, '');
        vnode.context[binding.expression] = el.value;
        console.log(el.value);
      },
      update(el, binding, vnode) {
        console.log(el.value);
        console.log(binding);
        console.log(vnode);
        el.value = el.value.replace(/[^\d.]/g, '');
        vnode.context[binding.expression] = el.value;
      },
    },
  },
  components: {},
};
</script>

<style></style>
