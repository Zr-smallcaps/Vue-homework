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
        <td><input type="checkbox" v-model="item.c" @click="countUp(item.id)" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <button @click="countJian(item.id)">-</button><input type="text" v-model="item.count" /><button
            @click="countAdd(item.id)"
          >
            +
          </button>
        </td>
        <td>{{ item.count * item.price }}</td>
        <td><button @click="del(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="clearChange">删除选中商品</button>
    <button @click="clear">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数{{ sumPrice }}</p>
      <p>总价{{ total }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, c: true, name: '奔驰', price: 100, count: 1, time: '2020-08-01' },
        { id: 2, c: false, name: '宝马', price: 100, count: 0, time: '2020-08-02' },
        { id: 3, c: false, name: '奥迪', price: 100, count: 0, time: '2020-08-03' },
      ],
      // sumPrice: 0,
    };
  },
  methods: {
    del(id) {
      let index = this.list.findIndex(ele => ele.id === id);
      // 删除按钮 - 得到索引, 删除数组里元素
      console.log(index);

      this.list.splice(index, 1);
    },
    countUp(val) {
      console.log(val);
      if (this.list[val - 1].c == false) {
        this.list[val - 1].count = 1;
      } else {
        this.list[val - 1].count = 0;
      }
    },
    countJian(val) {
      if (this.list[val - 1].count <= 0) {
        return this.list[val - 1].count == 0;
      }
      this.list[val - 1].count--;
      if (this.list[val - 1].count == 0) {
        console.log(this.list[val - 1].c);
        this.list[val - 1].c = false;
      } else {
        this.list[val - 1].c = true;
      }
    },
    countAdd(val) {
      this.list[val - 1].count++;
      if (this.list[val - 1].count == 0) {
        console.log(this.list[val - 1].c);
        this.list[val - 1].c = false;
      } else {
        this.list[val - 1].c = true;
      }
    },
    clearChange() {
      this.list = this.list.filter(item => {
        return item.c != true;
      });
    },
    clear() {
      this.list.forEach(ele => {
        ele.count = 0;
      });
    },
  },

  computed: {
    sumPrice() {
      return this.list.reduce((sum, item) => {
        return sum + item.count;
      }, 0);
    },
    total() {
      return this.list.reduce((sum, item) => {
        return sum + item.count * item.price;
      }, 0);
    },
    isAll: {
      set(val) {
        console.log(val);
        // 7. 全选框 - 选中状态(true/false)
        return this.list.forEach(element => {
          element.c = val;
          console.log(1);
        });
      },
      get() {
        // 6. 统计小选框状态 ->  全选状态
        // every口诀: 查找数组里"不符合"条件, 直接原地返回false
        return this.list.every(obj => {
          obj.c === true;
        });
      },
      isChange: {},
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
