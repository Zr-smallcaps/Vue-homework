<template>
    <div id="app">
        <Main
            :list="list"
            @del="delFn"
            @detail="detailFn"
        ></Main>
        <AddBook
            v-if="isShow"
            @add="addFn"
            ref="addbook"
        ></AddBook>
        <div style="margin: 40px auto">
            <input
                type="text"
                style="width: 220px"
                placeholder="搜索-书本名称"
                @keydown.enter="enterFn"
                v-model="bookname"
            />

            <button
                style="margin-top: 20px"
                @click="isShow = !isShow"
            >
                新增({{ isShow ? "隐藏" : "显示" }})
            </button>
        </div>
    </div>
</template>

<script>
import Main from "./components/Main";
import AddBook from "./components/AddBook";
export default {
    data () {
        return {
            list: [],
            bookName: '',
            isShow: false,
        };
    },
    components: {
        AddBook,
        Main,
    },
    created () {
        this.getList();
    },
    methods: {
        addFn (obj) {
            this.$refs.addbook.disabled = true;
            this.$axios({
                url: "/api/addbook",
                method: "POST",
                data: {
                    ...obj,
                    appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
                },
            }).then((res) => {
                this.$refs.addbook.disabled = false;
                this.$refs.addbook.clear();
                alert(res.data.msg);
                if (res.data.status == 200 || res.data.status == 201) {
                    this.getList();
                }
            });
        },
        detailFn (id) {
            this.$axios({
                url: "/api/getbooks",
                params: { id },
            }).then((res) => {
                const info = res.data.data && res.data.data[0];
                alert(
                    `作者：${info.author}; 出版社：${info.publisher}; 书名：${info.bookname}`
                );
            });
        },
        enterFn () {
            const params = {};
            this.bookname ? (params.bookname = this.bookname) : "";
            this.getList(params);
        },
        getList (params = {}) {
            this.$axios({
                url: "/api/getbooks",
                params: params,
            }).then((res) => {
                this.list = res.data.data;
            });
        },
        delFn (id) {
            this.$axios({
                url: "/api/delbook",
                params: { id },
            }).then(() => {
                this.getList();
            });
        },
    },
};
</script>
