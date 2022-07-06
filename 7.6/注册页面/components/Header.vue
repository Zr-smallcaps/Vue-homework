<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      style="margin-left: 50px"
    >
      <el-menu-item
        index="1"
        style="font-size: 20px"
        @click="changeName = 'Imformation'"
        >手机注册</el-menu-item
      >

      <el-menu-item
        index="2"
        style="font-size: 20px"
        @click="changeName = 'Address'"
        >邮箱注册</el-menu-item
      >
    </el-menu>
    <keep-alive>
      <component :is="changeName">
        <template v-slot:phone>
          <el-input placeholder="输入手机内容" v-model="input1">
            <template slot="prepend">+86</template>
          </el-input>
        </template>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Imformation from './Imformation.vue';
import Address from './Address.vue';
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      changeName: 'Imformation',
    };
  },
  components: { Imformation, Address },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.tab {
  color: rgb(69, 158, 252);
  font-size: 20px;
  font-weight: 600;
}
.tabs {
  border-color: rgb(69, 158, 252);
}
el-menu-item {
  color: rgb(3, 177, 240);
  margin-left: 80px;
}
</style>
