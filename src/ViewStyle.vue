<template>
  <div>
     <button class="wh" @click="conName='MyPhone'">手机注册</button>
     <button class="wh" @click="conName='MyEmail'">邮箱注册</button>
    

      <keep-alive>
       <component :is="conName"></component>
      </keep-alive>
  </div>
</template>

<script>
import MyEmail from './components/MyEmail.vue'
import MyPhone from './components/MyPhone.vue'
export default {
     data() {
        return {
            conName:"MyPhone",
             activeName: 'second'
        
        }
     },
     components:{
        MyEmail,
        MyPhone
     },
      methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style>
 .wh{
   width: 50%;
    height: 100px;
 }
 .ww{
  width: 50%;
 }
</style>