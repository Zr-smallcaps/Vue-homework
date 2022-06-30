<template>
  <div>
    <div  style="display: inline-block" v-for="(item,index) in arr" :key="index">
    <input type="checkbox" name="sex" v-model="status" :value="item">{{item}}</div>
    <p>{{sum}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      arr:[9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      status:[]
    }
  },
  // 计算属性优势:
  // 带缓存
  // 计算属性对应函数执行后, 会把return值缓存起来
  // 依赖项不变, 多次调用都是从缓存取值
  // 依赖项值-变化, 函数会"自动"重新执行-并缓存新的值
 computed:{
   sum(){
     return this.status.reduce((sum,val)=>{
       return sum + val
     },0)
   }
 }
}
</script>

<style>

</style>