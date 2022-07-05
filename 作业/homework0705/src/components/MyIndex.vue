<template>
  <div>
    <h1 style="margin-left: 40%">图书管理系统</h1>

    <el-input v-model="input" placeholder="请输入内容" class="input" style="width: 200px"></el-input>
    <el-button type="primary" plain @click="searchBooks" style="width: 120px">搜索书名按钮</el-button>

    <el-table :data="tableData" border="1" style="width: 40%" class="e-table">
      <el-table-column fixed prop="id" label="序号" width="150"> </el-table-column>
      <el-table-column prop="bookname" label="书名" width="120"> </el-table-column>
      <el-table-column prop="publisher" label="作者" width="120"> </el-table-column>
      <el-table-column prop="author" label="出版社" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="add">
      <el-input placeholder="书名" v-model="inputBookname" clearable> </el-input>
      <el-input placeholder="作者" v-model="inputPublisher" clearable> </el-input>
      <el-input placeholder="出版社" v-model="inputAuthor" clearable> </el-input>
      <el-button type="primary" round @click="addFn">查看</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      visible: false,
      inputBookname: '',
      inputPublisher: '',
      inputAuthor: '',
      input: '',
      tableData: [],
      show: '',
    };
  },
  watch: {
    input(newval, oldval) {
      console.log(newval);
      if (newval.length == 0) {
        this.searchBooks();
      }
    },
  },
  created() {
    axios({
      url: 'http://www.liulongbin.top:3006/api/getbooks',
    }).then(res => {
      console.log(res);
      this.tableData = res.data.data;
    });
  },
  methods: {
    //删除
    del(val) {
      console.log(val);
      axios({
        url: 'http://www.liulongbin.top:3006/api/delbook',
        method: 'GET',
        params: {
          id: val,
        },
      }).then(res => {
        console.log(res);
        axios({
          url: 'http://www.liulongbin.top:3006/api/getbooks',
        }).then(res => {
          console.log(res);
          this.tableData = res.data.data;
        });
      });
    },
    //新增
    addFn() {
      axios({
        url: 'http://www.liulongbin.top:3006/api/addbook',
        method: 'POST',
        data: {
          appkey: '7250d3eb-18e1-41bc-8bb2-11483665535a',
          bookname: this.inputBookname,
          author: this.inputPublisher,
          publisher: this.inputAuthor,
        },
      }).then(res => {
        axios({
          url: 'http://www.liulongbin.top:3006/api/getbooks',
        }).then(res => {
          console.log(res);
          this.tableData = res.data.data;
        });
      });
    },
    //查看
    handleClick(row) {
      alert(`${row.bookname}${row.author}${row.publisher}`);
    },
    //搜索
    searchBooks() {
      axios({
        url: 'http://www.liulongbin.top:3006/api/getbooks',
        params: {
          bookname: this.input,
        },
      }).then(res => {
        console.log(res);
        this.tableData = res.data.data;
      });
    },
  },
};
</script>
<style scoped>
.e-table {
  text-align: center;
  margin-left: 30%;
  margin-top: 20px;
}
.input {
  margin-left: 30%;
}
.add {
  width: 200px;
  margin-left: 30%;
}
</style>
