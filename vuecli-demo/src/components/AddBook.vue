<template>
    <form>
        <div>
            <input
                type="text"
                placeholder="书名"
                v-model="obj.bookname"
            />
        </div>
        <div>
            <input
                type="text"
                placeholder="作者"
                v-model="obj.author"
            />
        </div>
        <div>
            <input
                type="text"
                placeholder="出版社"
                v-model="obj.publisher"
            />
        </div>
        <button
            style="margin-top: 20px"
            @click.prevent="add"
            :disabled="disabled"
        >新增</button>
    </form>
</template>

<script>
export default {
    data () {
        return {
            obj: {
                bookname: "",
                author: "",
                publisher: "",
            },
            disabled: false,
        };
    },
    methods: {
        add () {
            if (
                !this.obj.bookname.trim() ||
                !this.obj.author.trim() ||
                !this.obj.publisher.trim()
            ) {
                return alert("Please enter a book message");
            }
            this.$emit("add", this.obj);
        },
        clear () {
            this.obj.bookname = "";
            this.obj.author = "";
            this.obj.publisher = "";
        },
    },
}
</script>

<style>
</style>