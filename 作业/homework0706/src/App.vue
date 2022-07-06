<template>
  <div class="app">
    <div class="adc">
      <a href="javascript:;" @click="componentId = 'Shou'" id="a">手机注册</a>
      <a href="javascript:;" @click="componentId = 'Youx'" id="b">邮箱注册</a>
    </div>

    <keep-alive>
      <component :is="componentId">
        <template v-slot:dl="scoped">
          <input type="password" name="" id="" v-model="scoped.dl" /><br />
          <input type="password" name="" id="" placeholder="再次输入登录密码" />
        </template>
        <template v-slot:sj="scoped">
          <input type="text" placeholder="输入手机号" v-model="scoped.sj" /><br />
          <input type="text" name="" id="" placeholder="输入验证码" />
          <el-button type="primary">发送验证码</el-button>
        </template>
        <template v-slot:yao="scoped">
          <input type="text" name="" id="" placeholder="输入客户经理邀请码" v-model="scoped.yao" />
        </template>
        <template v-slot:yx="scoped">
          <input type="text" name="" id="" placeholder="请输入你的邮箱地址" v-model="scoped.yx" />
        </template>
        <template v-slot:yxmm="scoped">
          <input type="password" name="" id="" placeholder="输入你的邮箱密码" v-bind="scoped.yxmm" />
        </template>
        <template v-slot:que="scoped">
          <input type="password" name="" id="" placeholder="请确认密码" v-model="scoped.que" />
        </template>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Shou from './components/Shou.vue';
import Youx from './components/Youx.vue';
export default {
  data() {
    return {
      componentId: 'Shou',
      activeName: 'second',
    };
  },
  components: {
    Shou,
    Youx,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.app {
  margin: 0 auto;
}
.adc {
  width: 100%;
  height: 50px;
  background-color: red;
}
#a {
  margin-left: 50px;
}
#b {
  margin-left: 100px;
}
</style>
