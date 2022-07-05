<template>
  <div id="form">
    <div>
      <input
        type="text"
        placeholder="search----bookname"
        @keydown.enter="searchBook('search')"
        v-model.trim="bookName"
      />
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版社</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in showList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.bookname }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.publisher }}</td>
          <td>
            <button @click="message(item.id)">详情</button>
            <button @click="delBook(item.id)">删除详情</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p>新增图书信息</p>
    <div>
      <input type="text" placeholder="书名" v-model.trim="bookObj.bookname" />
    </div>
    <div>
      <input type="text" placeholder="作者" v-model.trim="bookObj.author" />
    </div>
    <div>
      <input
        type="text"
        placeholder="出版社"
        v-model.trim="bookObj.publisher"
      />
    </div>
    <button @click="sendBook('send')">新增</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowStr: 'all',
      list: [],
      searchList: [],
      sendList: [],
      bookName: '',
      bookObj: {
        id: '',
        bookname: '',
        author: '',
        publisher: '',
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    //获取接口数据
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
    message(id) {
      this.$axios({
        url: '/api/getbooks',
        method: 'GET',
        params: {
          id,
        },
      }).then((res) => {
        console.log(res.data.data);
      });
    },
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
  },
  computed: {
    showList() {
      if (this.nowStr == 'all') {
        return this.list;
      }
      if (this.nowStr == 'search') {
        return this.searchList;
      }
      if (this.nowStr == 'send') {
        return this.sendList;
      }
    },
  },
};
</script>
<style lang="css">
th,
td {
  width: 150px;
  height: 30px;
}
td {
  text-align: center;
}
</style>
