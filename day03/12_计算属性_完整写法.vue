<template>
  <div>
      <div>
          <span>姓名:</span>
          <input type="text">
      </div>
  </div>
</template>

<script>
// 问题: 给计算属性赋值 - 需要setter
// 解决:
/*
    完整语法:
    computed: {
        "计算属性名" (){},
        "计算属性名": {
            set(值){

            },
            get(){
                return 值
            }
        }
    }
*/
export default {
    computed: {
        
    }
}
</script>

<style>

</style>