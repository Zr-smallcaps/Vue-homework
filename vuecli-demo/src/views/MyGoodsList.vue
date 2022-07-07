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
                    <input
                        class="tag-input form-control"
                        style="width: 100px;"
                        type="text"
                        v-focus
                        v-if="scope.row.inputVisible"
                        v-model="scope.row.inputValue"
                        @blur="scope.row.inputVisible = false"
                        @keydown.enter="enterFn(scope.row)"
                        @keydown.esc="scope.row.inputValue = ''"
                    />
                    <button
                        v-else
                        style="display: block;"
                        class="btn btn-primary btn-sm add-tag"
                        @click="scope.row.inputVisible = true"
                    >+Tag</button>
                    <span
                        v-for="(str, ind) in scope.row.tags"
                        :key="ind"
                        class="badge badge-warning"
                    >{{ str }}</span>
                </td>
                <td>
                    <button
                        class="btn btn-danger btn-sm"
                        @click="removeBtn(scope.row.id)"
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
        removeBtn (id) {
            const index = this.list.findIndex(obj => obj.id === id);
            this.list.splice(index, 1);
        },
        enterFn (obj) { // 回车
            // console.log(obj.inputValue);
            if (obj.inputValue.trim().length == 0) {
                alert('请输入数据')
                return
            }

            obj.tags.push(obj.inputValue) // 表单里的字符串状态tags数组
            obj.inputValue = ""
        }
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