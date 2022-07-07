<template>
    <div>
        <MyHeader
            :background="'blue'"
            :fontColor="'white'"
            title="TabBar案例"
        ></MyHeader>
        <div class="main">
            <component :is="comName"></component>
        </div>
        <MyTabBar
            :list="tabList"
            @changeTab="changeTabFn"
        ></MyTabBar>
    </div>
</template>

<script>
import MyHeader from "./components/day_07/MyHeader";
import MyTabBar from './components/day_07/MyTabBar'
import MyGoodsList from './views/MyGoodsList'
import MyGoodsSearch from './views/MyGoodsSearch'
import MyUserInfo from './views/MyUserInfo'
export default {
    data () {
        return {
            comName: "MyGoodsList", // 默认显示的组件
            tabList: [ // 底部导航的数据
                {
                    iconText: "icon-shangpinliebiao",
                    text: "商品列表",
                    componentName: "MyGoodsList",
                },
                {
                    iconText: "icon-sousuo",
                    text: "商品搜索",
                    componentName: "MyGoodsSearch",
                },
                {
                    iconText: "icon-user",
                    text: "我的信息",
                    componentName: "MyUserInfo",
                },
            ],
        };
    },
    components: {
        MyHeader,
        MyTabBar,
        MyGoodsList,
        MyGoodsSearch,
        MyUserInfo
    },
    methods: {
        changeTabFn (val) {
            this.comName = val; // MyTabBar里选出来的组件名赋予给is属性的comName
            // 导致组件的切换
        }
    }
};
</script>

<style scoped>
.main {
    padding-top: 45px;
    padding-bottom: 51px;
}
</style>