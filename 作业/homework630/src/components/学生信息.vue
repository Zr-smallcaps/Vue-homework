<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="isShow1 ? changeup() : changeFn()">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button @click="del(item.id)">删除</button>
            <button @click="change(item.id)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: 'Tom', age: 19, sex: '男' },
        { id: 2, name: 'Tom1', age: 19, sex: '男' },
      ],
      name: '',
      age: '',
      sex: '',
      isShow1: false,
    };
  },
  methods: {
    changeFn() {
      this.list.push({
        id: this.list.length + 1,
        name: this.name,
        age: this.age,
        sex: this.sex,
      });
    },
    del(id) {
      let index = this.list.findIndex(obj => obj.id === id);
      this.list.splice(index, 1);
    },
    //编辑按钮点击事件
    change(val) {
      this.oldId = val - 1;
      this.isShow1 = true;
    },
    changeup() {
      this.list.splice(this.oldId, 1, {
        id: this.oldId + 1,
        name: this.name,
        age: this.age,
        sex: this.sex,
      });
    },
  },
};
</script>
