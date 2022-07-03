<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          href="javascript:;"
          :class="{ selected: isSel == 'all' }"
          @click="change('all')"
          >全部</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          :class="{ selected: isSel == 'no' }"
          @click="change('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          :class="{ selected: isSel == 'yes' }"
          @click="change('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props: ["count"],
  data() {
    return {
      isSel: "all",
    };
  },
  methods: {
    change(val) {
      this.isSel = val;
      this.$emit("fliterdata", val);
    },
    clear() {
      this.$emit("clear");
    },
  },
};
</script>
