<template>
  <div>
    <div>
      <span>选择所在地区</span>
      <input type="radio" name="area" v-model="area" value="中国大陆" />中国大陆
      <input type="radio" name="area" v-model="area" value="中国香港" />中国香港
    </div>
    <div>
      <span>手机号码：</span>
      <input type="text" name="number" v-model.number="number" value="" />
    </div>
    <div>
      <span>年龄：</span>
      <input type="text" name="age" v-model.number="age" value="" />
    </div>
    <div>
      <span>密码：</span>
      <input type="password" name="pass" v-model="pass" />
    </div>
    <div>
      <span>爱好：</span>
      <input type="checkbox" v-model="hobby" value="看书" />看书
      <input type="checkbox" v-model="hobby" value="学习" />学习
      <input type="checkbox" v-model="hobby" value="抽烟" />抽烟
    </div>

    <div><input type="checkbox" v-model="isgrow" /> 记住密码</div>
    ================================================================
    <div>
      我来自：{{ area }}
      <br />
      手机号码是：{{ number }}
      <br />
      年龄是：{{ age }}
      <br />
      密码是：{{ pass }}
      <br />
      爱好是：{{ hobby.join(',') }}
      <br />
      是否记住密码：{{ isgrow ? '是' : '否' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return { area: '中国大陆', number: '', age: '', pass: '', hobby: [], isgrow: '' };
  },
};
</script>

<style></style>
