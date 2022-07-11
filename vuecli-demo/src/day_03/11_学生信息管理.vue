<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="newObj.name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.number="newObj.age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="newObj.sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="addFn">添加/修改</button>
    </div>
    <div>
      <table
        border="1"
        cellpadding="10"
        cellspacing="0"
        id="tble"
        v-show="list.length > 0"
      >
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button @click="delFn(index)">删除</button>
            <button @click="editFn(index)">编辑</button>
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
      newObj: {
        name: "",
        age: 0,
        sex: "",
      },
      editIndex: null,
      list: [
        { name: "Tom", age: 25, sex: "男" },
        { name: "Jone", age: 21, sex: "女" },
        { name: "小李", age: 18, sex: "男" },
      ],
    };
  },
  methods: {
    addFn() {
      let theObj = { ...this.newObj };
      if (this.editIndex !== null) {
        this.$set(this.list, this.editIndex, theObj);
        this.editIndex = null;
      } else {
        this.list.push(theObj);
      }
    },
    delFn(index) {
      this.list.splice(index, 1);
    },
    editFn(index) {
      const editObj = this.list[index];
      this.newObj = { ...editObj };
      this.editIndex = index;
    },
  },
};
</script>

<style>
div {
  margin: 10px 20px;
}
button {
  margin-left: 20px;
}
#tble th,
#tble td {
  border: 1px solid black;
  padding: 10px;
  height: 35px;
  line-height: 35px;
  text-align: center;
}
</style>
