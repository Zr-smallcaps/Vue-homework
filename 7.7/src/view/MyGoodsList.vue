<template>
  <div>
    <MyTable :goodsList="list">
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
        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-if="scope.row.inputVisible"
            v-focus
            v-model="scope.row.inputValue"
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            style="margin-left: 8px"
            class="btn btn-info"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            >{{ item }}</span
          >
        </td>
        <td>
          <button
            class="btn btn-danger btn-sm"
            @click="del(scope.row.id)"
            v-remove="scope.row.delTage"
          >
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue';
export default {
  data() {
    return {
      list: [],
      delList: ['admit', 'productor', 'test'],
    };
  },
  components: { MyTable },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios({
        url: '/api/goods',
      }).then((res) => {
        res.data.data.forEach((item, index) => {
          if (index > 4) {
            item.delTage = 'productor';
          } else if (index < 2) {
            item.delTage = 'admit';
          } else {
            item.delTage = 'test';
          }
        });
        this.list = res.data.data;
        console.log(res.data.data);
      });
    },
    del(id) {
      const index = this.list.findIndex((ele) => {
        return ele.id == id;
      });
      this.list.splice(index, 1);
    },
    enterFn(obj) {
      if (obj.inputValue.trim() == '') {
        return alert('erty');
      }
      obj.tags.push(obj.inputValue);
      obj.inputValue = '';
    },
  },
  directives: {
    remove: {
      inserted(el, binding, vnode) {
        // console.log(vnode.context.delList);
       console.log(binding);
        if (binding.value == vnode.context.delList[2]) {
          el.style.display = 'none';
        }
      },
    },
  },
};
</script>

<style></style>
