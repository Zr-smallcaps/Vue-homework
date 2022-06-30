<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.trim="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="addInfo">添加/修改</button>
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
        <tr v-for="item in arr" :key="item.id">
          <td>
            <span v-show="item.flag"> {{ item.id }}</span>
            <input type="text" v-show="!item.flag" v-model="item.id" />
          </td>
          <td>
            <span v-show="item.flag"> {{ item.name }}</span>
            <input type="text" v-show="!item.flag" v-model="item.name" />
          </td>
          <td>
            <span v-show="item.flag"> {{ item.age }}</span>

            <input type="text" v-show="!item.flag" v-model="item.age" />
          </td>
          <td>
            <span v-show="item.flag">{{ item.sex }}</span>

            <input type="text" v-show="!item.flag" v-model="item.sex" />
          </td>
          <td>
            <button @click="delInfo(item.id)">删除</button>
            <button @click="item.flag = !item.flag">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
/* - 需求1: 铺设页面, 准备初始的数据(自己手写数据结构) - 前面是数组索引+1 *作为序号
- 需求2: 当输入框没有值, 要给用户一个提示, 必须都有值才能增加新数据 (数据驱动页面哦)
- 需求3: 添加功能 - 想好数据结构统一对象的key
- 需求4: 点击编辑功能, 把值赋予到输入框上(不要操作dom, 数据驱动页面)
- 需求5: 用户修改后, 点击相同按钮 - 想想怎么判断怎么是添加还是修改的功能 (提示: 准备一个全局变量, 点过编辑按钮可以让它为true) - 实现编辑后更新页面效果
- 需求6: 点击删除, 删除这行数据 */

export default {
  name: 'App',
  data() {
    return {
      name: '',
      age: 0,
      sex: '男',
      arr: [
        {
          id: 1,
          name: 'smallcaps',
          age: 18,
          sex: '女',
          flag: true,
        },
        {
          id: 2,
          name: '易烊千玺',
          age: 18,
          sex: '男',
          flag: true,
        },
      ],
    };
  },
  methods: {
    addInfo() {
      if (this.age == 0 || this.name == '') {
        return alert('请输入正确的信息');
      }
      let id = this.arr.length ? this.arr.length + 1 : 1;
      this.arr.push({
        id,
        name: this.name,
        age: this.age,
        sex: this.sex,
      });
      this.name = '';
      this.age = 0;
      this.sex = '男';
    },
    delInfo(id) {
      this.arr = this.arr.splice(id, 1);
    },
  },
};
</script>
<style>
#app {
  margin-top: 100px;
  margin-left: 100px;
}
input {
  width: 50px;
}
</style>
