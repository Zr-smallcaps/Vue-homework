<!-- <template>
  <div >
    <div >
      <table>
    
        <tbody>
          <tr v-for="obj in list" :key="obj.id">
            <td>{{ obj.id }}</td>
            <td>{{ obj.bookname }}</td>
            <td>{{ obj.author }}</td>
            <td>{{ obj.publisher }}</td>
            <td>
              <a href="#" @click="del(obj.id)">删除</a
              ><a href="#" @click="detail(obj.id)">详情</a>
            </td>
          </tr>
        </tbody>

        <tfoot v-if="list.length <= 0">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
       list: [],
       showlist: [],
       bookObj:{
          bookname:'',
          author:'',
          publisher:''
       }
    }
},
mounted() {
    this.$axios({
         method:'get',
         url:'/api/addbook',
    }).then((res)=>{
        console.log(res);
    })

    }
}

</script>

<style>

</style> -->