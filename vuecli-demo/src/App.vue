<template>
    <div>
        <MyHeader></MyHeader>
        <MyTabBar :list="tabList"></MyTabBar>
    </div>
</template>

<script>
import MyHeader from "./components/day_07/MyHeader"
import MyTabBar from "./components/day_07/MyTabBar"
export default {
    data () {
        return {
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
        }
    },
    components: {
        MyHeader,
        MyTabBar,
    }
}
</script>

<style>
</style>