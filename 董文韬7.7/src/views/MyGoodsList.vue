<template>
    <div>
        <MyTable :arr="list">
            <template #header>
                <th>#</th>
                <th>商品名称</th>
                <th>价格</th>
                <th>标签</th>
                <th>操作</th>
            </template>
            <template #table="scope">
                <td>{{ scope.row.id }}</td>
                <td>{{ scope.row.goods_name }}</td>
                <td>{{ scope.row.goods_price }}</td>
                <td><input v-focus v-if="scope.row.inputShow" type="text" @blur="scope.row.inputShow = false"
                        v-model="scope.row.inputValue" @keyup.enter="enterFn(scope.row)"
                        @keyup.esc="scope.row.inputValue = ''">
                    <button v-else @click="scope.row.inputShow = true">+tag</button>
                    <span style="margin-right:8px" class="badge badge-warning" v-for="(item, index) in scope.row.tags"
                        :key="index">{{ item
                        }}</span>
                </td>
                <td>
                    <button class="btn btn-danger btn-sm" @click="del(scope.row.id)">删除</button>
                </td>
            </template>
        </MyTable>
    </div>

</template>
<script>
// import { objectToString } from '@vue/shared'
import MyTable from '../components/MyTable.vue'

export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        this.getlist()
    },
    computed: {
    },
    methods: {
        getlist() {
            this.$axios({
                url: '/api/goods'
            }).then((res) => {
                res.data.data.forEach((ele) => {
                    ele.inputShow = false
                })
                this.list = res.data.data
            })
        },
        del(id) {
            let index = this.list.findIndex((ele) => ele.id == id)
            this.list.splice(index, 1)
            // this.getlist()
        },
        enterFn(val) {
            if (val.inputValue.trim() == '') {
                return
            }
            val.tags.push(val.inputValue)
            val.inputValue = ''
        }
    },
    components: {
        MyTable
    }
}
</script>
<style lang="scss" scoped>
</style>
