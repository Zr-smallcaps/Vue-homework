<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @add="addFn"></TodoHeader>
    <TodoMain :list="showList" @del="delFn"></TodoMain>
    <TodoFooter
      :count="count"
      @fliterdata="fliterdataFn"
      @clear="clearFn"
    ></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";
export default {
  data() {
    return {
      list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 201, name: "睡觉", isDone: false },
        { id: 103, name: "打豆豆", isDone: true },
      ],
      getSel: "all",
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    addFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        name: val,
        isDone: false,
        id,
      });
    },
    delFn(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    fliterdataFn(val) {
      this.getSel = val;
    },
    clearFn() {
      this.list.forEach((ele) => (ele.isDone = false));
    },
  },
  computed: {
    count() {
      return this.list.filter((ele) => !ele.isDone).length;
    },
    showList() {
      if (this.getSel == "no") {
        return this.list.filter((ele) => !ele.isDone);
      } else if (this.getSel == "yes") {
        return this.list.filter((ele) => ele.isDone);
      } else {
        return this.list;
      }
    },
  },
};
</script>

<style></style>
