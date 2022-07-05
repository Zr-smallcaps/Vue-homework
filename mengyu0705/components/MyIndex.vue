<template>
<div>
<el-input 
type="text" 
class='wid' 
placeholder="搜索书本名称"
  @keydown.enter="searchBook('search')"
  v-model.trim="bookName"
  ></el-input>
  <el-table   
    :data="list"
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      prop="id"
      label="序号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="bookname"
      label="书名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="出版商"
      width="120">
      <template scoped>
        <el-button
         @click="delBook(item.id)"
          type="text"
          size="small"
          
          >
          删除详情
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <pre></pre>
 
 <div>
   <el-input
  type="bookname"
  :rows="2"
  class='wid'
  placeholder="书名"
 v-model.trim="bookObj.bookname">
</el-input>
<pre></pre>
 <el-input
  type="author"
  :rows="2"
  class='wid'
  placeholder="作者"
 v-model.trim="bookObj.author">
</el-input>
<pre></pre>
 <el-input
  type="address"
  :rows="2"
  class='wid'
  placeholder="出版社"
  v-model.trim="bookObj.publisher">
</el-input>
<pre></pre>
 <el-button @click="sendBook('send')" type="success">宇哥威武</el-button>
 </div>
 
</div>

</template>

<script>
  export default {
    
    data() {
      return {
        nowStr: 'all',
        textarea1:'',
        textarea2:'',
        textarea3:'',
        input:'',
        showList:[],
        searchList: [],
       list: [],
       bookObj: {
        id: '',
        bookname: '',
        author: '',
        publisher: '',
      },
      }
    },
created() {
    this.getList();
  },
  
    methods: {
   delBook(id) {
        console.log(id);
        this.$axios({
        url: '/api/delbook',
        method: 'GET',
        params: { id: id },
      }).then((res) => {
        console.log(res);
        this.getList();
      });
    },
  
      getList() {
      let params = {
        bookname: this.bookname,
      };
      this.$axios({
        url: '/api/getbooks',
        method: 'GET',
        params: (params = params.bookname ? params : null),
      }).then((res) => {
        this.list = res.data.data;
      });
    },
    sendBook(val) {
      this.$axios({
        url: '/api/addbook',
        method: 'POST',
        data: {
          ...this.bookObj,
        },
      }).then((res) => {
        console.log(res);
        this.nowStr = val;
        this.sendList.push(JSON.parse(res.config.data));
      });
    },
    searchBook(val) {
      this.$axios({
        url: '/api/getbooks',
        method: 'GET',
        params: {
          bookname: this.bookName,
        },
      }).then((res) => {
        this.searchList = res.data.data;
        console.log(this.searchList);
        this.nowStr = val;
      });
    },
    
  }
  }
</script>

<style scoped>
.wid{
  width: 60%;
}
</style>