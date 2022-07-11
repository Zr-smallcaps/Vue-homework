<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAll" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="item in list" :key="item.id">
        <td><input type="checkbox" v-model="item.flag" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <button @click="item.proNum > 0 ? item.proNum-- : ''">-</button>
          <input type="text" v-model.number="item.proNum" />
          <button @click="item.proNum++">+</button>
        </td>
        <td>{{ (item.price * item.proNum).toFixed(2) }}</td>
        <td><button @click="del(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="6">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="Delete">删除选中商品</button>
    <button @click="clear">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数: {{ Already }}</p>
      <p>总价: {{ TotalPrice.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰", price: 12.6, proNum: 0, flag: false },
        { id: 2, name: "宝马", price: 24.8, proNum: 0, flag: false },
        { id: 3, name: "奥迪", price: 29.8, proNum: 0, flag: false },
      ],
    };
  },
  methods: {
    del(id) {
      // 删除按钮 - 得到索引, 删除数组里元素
      let index = this.list.findIndex((ele) => ele.id === id);
      this.list.splice(index, 1);
    },
    Delete() {
      this.list = this.list.filter((item) => {
        return !item.flag;
      });
    },
    clear() {
      this.list.forEach((ele) => {
        ele.proNum = 0;
        ele.flag = false;
      });
    },
  },
  computed: {
    Already: {
      get() {
        let count = this.list.reduce((count, item) => {
          if (item.flag) {
            count += item.proNum;
          }
          return count;
        }, 0);
        return count;
      },
    },
    TotalPrice: {
      get() {
        let count = this.list.reduce((count, item) => {
          if (item.flag) {
            count += item.proNum * item.price;
          }
          return count;
        }, 0);
        return count;
      },
    },
    isAll: {
      set(val) {
        return this.list.forEach((item) => {
          item.flag = val;
        });
      },
      get() {
        return this.list.every((item) => {
          return item.flag;
        });
      },
    },
  },
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
