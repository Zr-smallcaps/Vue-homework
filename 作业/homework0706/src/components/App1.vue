<template>
  <div>
    <UseTable>
      <template v-slot:name="scope">
        <input type="text" v-model="scope.row.name" />
      </template>
      <template v-slot:age="scope">
        <input type="text" v-model="scope.row.age" />
      </template>
      <template v-slot:toux="scope">
        <div v-if="scope.row.type == 0">
          <a href="scope.row.headImgUrl">{{ scope.row.headImgUrl }}</a>
        </div>
        <div v-if="scope.row.type == 1">
          <img :src="scope.row.headImgUrl" alt="" width="40px" />
        </div>
        <div v-if="scope.row.type == 2">
          {{ scope.row.headImgUrl }}
        </div>
      </template>
    </UseTable>
  </div>
</template>

<script>
import UseTable from './components/day_06/UseTable';
export default {
  components: {
    UseTable,
  },
};
</script>

<style></style>
