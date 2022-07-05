<template>
    <div>
        <input type="text" placeholder="搜索书本名称" v-model="seachbookname">
        <button @click="seachbook">点击搜索</button><br>
        <button @click="getbooks">获取最新图书列表</button>
        <tr>
            <th>序号</th>
            <th>书名</th>
            <th>作者</th>
            <th>出版商</th>
            <th>操作</th>
        </tr>
        <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.bookname }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.publisher }}</td>
            <td>
                <a href="javascript:;" @click="delFn(item.id)">删除</a><a href="javascript:;"
                    @click="infoFn(item.id)">详情</a>
            </td>
        </tr>
        <input type="text" placeholder="书名" v-model.trim="obj.bookname" /> <br />
        <input type="text" placeholder="作者" v-model.trim="obj.author" /><br />
        <input type="text" placeholder="出版社" v-model.trim="obj.publisher" /><br />
        <button @click="addFn" ref="addbtn">新增</button>
    </div>
</template>

<script>
// import axios from "axios"
export default {
    data() {
        return {
            list: [],
            seachbookname: '',
            obj: {
                bookname: "",
                author: "",
                publisher: "",
            },
        };
    },

    components: {},

    computed: {},
    created() {
        this.getbooks()
    },
    methods: {
        getbooks() {
            this.$axios({
                methods: 'get',
                url: '/api/getbooks'
            }).then((res) => {
                this.list = res.data.data
                console.log(this.list);
            })
        },
        seachbook() {
            this.list = this.list.filter((item) => item.bookname == this.seachbookname)
            this.seachbookname = ''
        },
        addFn() {
            this.$axios({
                method: 'POST',
                url: '/api/addbook',
                data: this.obj
            }).then((res) => {
                this.getbooks()
                console.log(res);
            })
        },
        delFn(id) {
            this.$axios({
                methods: 'get',
                url: '/api/delbook',
                params: { id },
            }).then((res) => {
                console.log(res);
                // console.log(this.list);
                this.getbooks()
            })
        }

    }
}
</script>
<style lang='css' scoped>
</style>