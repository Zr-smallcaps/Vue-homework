<template>
<div>
  <h2>国内网站：粉丝数量{{msg|fliter1(this.flag1)}}</h2>
  <h2>国内网站：粉丝数量{{msg|fliter1(this.flag2)}}</h2>

  
  <h3>时间：{{time|fliter2(this.flag1)}}</h3>
  <h3>时间：{{time|fliter2(this.flag2)}}</h3>
</div>
</template>

<script>
import moment from 'moment'

export default {
    data() {
      return {
        msg: 1876986,
        time: 1636450540055,
        flag1:false,
        flag2:true,

      }
    },
    fliters:{
        fliter1: function(x,y){
          if(y==false){
            return x/10000;
          }else{
            return x/1000;
          }
        },
        fliter2: function(x,y){
          if(y==false){
            return moment(x).format('YYYY-MM-DD');
          }else{
            return moment(x).format('YYYY/MM/DD')
          }
        }
    }
}
</script>

<style>

</style>
