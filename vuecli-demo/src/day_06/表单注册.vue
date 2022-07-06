<template>
    <div id="app">
        <div>
            <el-button
                @click="componentId='Phone'"
                id="a"
            >手机注册</el-button>
            <el-button
                @click="componentId='Mailbox'"
                id="b"
            >邮箱注册</el-button>
        </div>
        <div>
            <p>选择所在地区（实名认证主体所在地）</p>
            <el-radio
                v-model="radio"
                label="1"
            >中国大陆</el-radio>
            <el-radio
                v-model="radio"
                label="2"
            >中国台湾</el-radio>
        </div>
        <keep-alive>
            <component :is="componentId">
                <template v-slot:pwd="scoped">
                    <input
                        type="password"
                        name=""
                        id=""
                        v-model="scoped.pwd"
                    /><br />
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="再次输入登录密码"
                    />
                </template>
                <template v-slot:num="scoped">
                    <input
                        type="text"
                        placeholder="输入手机号"
                        v-model="scoped.num"
                    /><br />
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="输入验证码"
                    />
                    <el-button
                        type="primary"
                        size="mini"
                    >发送验证码</el-button>
                </template>
                <template v-slot:code="scoped">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="输入客户经理邀请码"
                        v-model="scoped.code"
                    />
                </template>
                <template v-slot:mailbox='scoped'>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="请输入你的邮箱地址"
                        v-model="scoped.mailbox"
                    >
                </template>
                <template v-slot:mailPwd='scoped'>
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="输入你的邮箱密码"
                        v-bind="scoped.mailPwd"
                    >
                </template>
                <template v-slot:confirm='scoped'>
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="请确认密码"
                        v-model="scoped.confirm"
                    >
                </template>
            </component>
        </keep-alive>
    </div>
</template>

<script>
import Phone from "./components/day_06/Phone"
import Mailbox from "./components/day_06/Mailbox "
export default {
    data () {
        return {
            componentId: "Phone",
            activeName: 'second',
            radio: '1',
        }
    },
    components: {
        Phone,
        Mailbox,
    },
    methods: {
        handleClick (tab, event) {
            console.log(tab, event);
        },
    },
}
</script>

<style scoped>
</style>