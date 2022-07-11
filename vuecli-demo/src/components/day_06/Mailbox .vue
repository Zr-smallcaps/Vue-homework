<template>
    <div>
        <p>选择你的邮箱</p>
        QQ：<slot name="mailbox"></slot>
        <div>
            <span>邮箱密码</span>
            <br>
            <slot name="mailPwd"></slot>
            <br>
            <span>确认密码</span>
            <br>
            <slot name="confirm"></slot>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
</style>