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
            <template #tbody="scope">
                <td>{{ scope.row.id }}</td>
                <td>{{ scope.row.goods_name }}</td>
                <td>{{ scope.row.goods_price }}</td>
                <!-- <td>
                    {{ scope.row.tags }}
                </td> -->
                <td>
                    <span
                        v-for="(str, ind) in scope.row.tags"
                        :key="ind"
                        class="badge badge-warning"
                    >{{ str }}</span>
                </td>
                <td>
                    <button
                        class="btn btn-danger btn-sm"
                    >删除</button>
                </td>
            </template>
        </MyTable>
    </div>
</template>

<script>
import MyTable from "../components/day_07/MyTable"
export default {
    data () {
        return {
            list: [],
        }
    },
    components: {
        MyTable,
    },
    created () {
        this.getList();
    },
    methods: {
        getList () {
            this.$axios({
                url: "/api/goods",
            }).then((res) => {
                this.list = res.data.data
            })
        },
    }
}
</script>

<style lang="less" scoped>
.my-goods-list {
    .badge {
        margin-right: 8px;
    }
}
</style>