<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul>
      <li v-for="(item,index) in arr" :key="index">
      {{item.name}} <button @click="btn(item.name)">购买</button></li>
    </ul>
    <ul>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr >
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="(item,index) in arr" :key="item.name">
        <th>{{index+1}}</th>
        <th>{{item.name}}</th>
        <th>{{item.price}}</th>
        <th>{{item.count}}</th>
        <th>{{item.addPrice}}</th>
      </tr>
    </table>
    <p>总价格为:{{fullprice}} </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullprice:0,
      arr: [
        {
          name: "水浒传",
          price: 107,
          count: 0,
          addPrice:0,
        },
        {
          name: "西游记",
          price: 192,
          count: 0,
          addPrice:0,
        },
        {
          name: "三国演义",
          price: 219,
          count: 0,
          addPrice:0,
        },
        {
          name: "红楼梦",
          price: 178,
          count: 0,
          addPrice:0,
        },
      ],
    };
  },
  methods:{
    btn(val){
      const index = this.arr.findIndex(ele => ele.name == val);
      let finalprice = ++this.arr[index].count 
      // console.log(finalprice);
      let str = this.arr[index].price*finalprice
      // console.log(str);
      // this.$set(this.arr[index].addPrice,3,str)
      this.arr[index].addPrice = str
      let sum = 0
      this.arr.forEach(function(val){
        // console.log(val,ind);
        console.log(val.addPrice);
        sum += val.addPrice
        // console.log(sum);  
      })
      // console.log(sum);
      this.fullprice=sum
    }
  }
};
</script>