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
          <span @click="subNum(item.id)">-</span>
          <button>{{ item.num }}</button>
          <span @click="item.num++">+</span>
        </td>
        <td>{{ item.text }}</td>
        <td><button @click="del(item.id)">删除</button></td>
      </tr>
      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delCheck">删除选中商品</button>
    <button @click="delEvery">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数:{{ allCount }}</p>
      <p>总价:{{ allPrice || 0 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShop: [],
      list: [
        { id: 1, name: '奔驰', price: 100, num: 1, text: '没钱', flag: false },
        { id: 2, name: '宝马', price: 200, num: 1, text: '没钱', flag: false },
        { id: 3, name: '奥迪', price: 300, num: 1, text: '没钱', flag: false },
      ],
    };
  },
  methods: {
    subNum(val) {
      let index = this.list.findIndex((ele) => ele.id === val);
      this.list[index].num--;

      if (this.list[index].num == 0) {
        return this.del(this.list[index].id);
      }
    },
    del(val) {
      let index = this.list.findIndex((ele) => ele.id === val);
      // 删除按钮 - 得到索引, 删除数组里元素
      this.list.splice(index, 1);
    },
    delCheck() {
      this.list.forEach((item, index) => {
        if (item.flag) {
          this.del(item.id);
        }
      });
    },
    delEvery() {
      this.list = [];
    },
  },
  computed: {
    isAll: {
      get() {
        return this.list.every((item) => {
          return item.flag;
        });
      },
      set(val) {
        this.list.forEach((item) => {
          item.flag = val;
        });
      },
    },
    allCount: {
      get() {
        let count = this.list.reduce((count, nowVal) => {
          if (nowVal.flag) {
            count = count + nowVal.num;
          }
          return count;
        }, 0);
        return count;
      },
    },
    allPrice: {
      get() {
        let count = this.list.reduce((count, nowVal) => {
          if (nowVal.flag) {
            count = count + nowVal.num * nowVal.price;
          }
          return count;
        }, 0);
        return count;
      },
    },
  },
  /*   watch: {
    allCount: {
      immediate: true,
      handler(nowVal) {
        if(this.)
      },
    },
  }, */
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
