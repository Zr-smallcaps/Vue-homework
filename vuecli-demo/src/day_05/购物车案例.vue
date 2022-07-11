<template>
    <div>
        <MyHeader title="购物车"></MyHeader>
        <div class="main">
            <MyGoods
                v-for="obj in list"
                :key="obj.id"
                :gObj="obj"
            ></MyGoods>
        </div>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
import MyHeader from "./components/day_05/MyHeader"
import MyGoods from "./components/day_05/MyGoods"
import MyFooter from "./components/day_05/MyFooter"
export default {
    data () {
        return {
            list: [],
        }
    },
    components: {
        MyHeader,
        MyGoods,
        MyFooter,
    },
    created () {
        this.$axios({
            url: "/api/cart"
        }).then(res => {
            this.list = res.data.list
        })
    }
}
</script>

<style scoped>
.main {
    padding-top: 45px;
    padding-bottom: 50px;
}
</style>