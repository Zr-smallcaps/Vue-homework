<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{ red: item.price > 100 }">{{ item.price }}</td>
            <td>{{ item.time | format }}</td>
            <td><a href="#" @click="delFn(item.id)">删除</a></td>
          </tr>
          <tr v-if="list.length !== 0" style="background-color: #eee">
            <td>统计:</td>
            <td colspan="2">总价钱为: {{ allPrice }}</td>
            <td colspan="2">平均价: {{ averagePrice }}</td>
          </tr>
        </tbody>

        <tfoot v-show="this.list.length === 0">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline" style="display: flex">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model.trim="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model.number="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="addFn">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      name: "",
      price: 0,
      list: JSON.parse(localStorage.getItem("list")) || [],
    };
  },
  methods: {
    addFn() {
      if (this.name.trim().length == 0 || this.price == 0) {
        alert("请输入完整信息");
        return;
      }
      let id =
        this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 100;
      this.list.push({
        id,
        name: this.name,
        price: this.price,
        time: new Date(),
      });
      this.name = "";
      this.price = 0;
    },
    delFn(id) {
      let index = this.list.findIndex((ele) => ele.id === id);
      this.list.splice(index, 1);
    },
  },
  filters: {
    format(val) {
      return moment(val).format("YYYY-MM-DD");
    },
  },
  computed: {
    allPrice() {
      return this.list.reduce((sum, next) => (sum += next.price), 0).toFixed(2);
    },
    averagePrice() {
      return (this.allPrice / this.list.length).toFixed(2);
    },
  },
  watch: {
    list: {
      handler() {
        localStorage.setItem("list", JSON.stringify(this.list));
      },
      deep: true,
    },
  },
};
</script>

<style>
.red {
  color: red;
}
</style>
