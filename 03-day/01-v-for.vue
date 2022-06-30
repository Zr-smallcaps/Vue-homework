<template>
  <div id="app">
    <!-- 语法1:
      v-for="(值变量名, 索引变量名) in 目标结构"
      口诀: 想要谁循环就放到谁身上
     -->
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
    <p>数组对象</p>
    <ul>
      <li v-for="item in stuArr" :key="item.id">
        {{ item.name }}--{{ item.sex }} -- {{ item.hobby }}
      </li>
    </ul>
    <p>对象 item:属性值 index:属性名</p>
    <ul>
      <li v-for="(item, index) in tObj" :key="index">
        item:{{ item }}--index:{{ index }}
      </li>
    </ul>
    <p>数字</p>
    <ul>
      <li v-for="(item, index) in count" :key="index">
        {{ item }}-------------------{{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      arr: ['小明', '小欢欢', '大黄'],
      stuArr: [
        {
          id: 1001,
          name: '孙悟空',
          sex: '男',
          hobby: '吃桃子',
        },
        {
          id: 1002,
          name: '猪八戒',
          sex: '男',
          hobby: '背媳妇',
        },
      ],
      tObj: {
        name: '小黑',
        age: 18,
        class: '1期',
      },
      count: 10,
    };
  },
};
</script>
