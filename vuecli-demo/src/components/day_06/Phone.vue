<template>
    <div>
        <div>
            <p>手机号码</p>
            <slot name="num"></slot>
        </div>
        <div>
            <p>登录密码</p>
            <slot name="pwd"></slot>
        </div>
        <div>
            <p>邀请码</p>
            <slot name="code"></slot>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
</style>