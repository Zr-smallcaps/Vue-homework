<template>
    <div>
        <span>国内网站：粉丝数量：{{ msg | fil(1) }}</span><br>
        <span>国外网站：粉丝数量：{{ msg | fil(2) }}</span><br><br>
        <span>时间:{{ timer | timeout(1) }}</span><br><br>
        <span>时间:{{ timer | timeout(2) }}</span><br><br>

    </div>
</template>
<script>
import moment from "moment"
export default {
    data() {
        return {
            msg: '1241251251',
            timer: 1636450540055
        }
    },
    created() {
    },
    computed: {
    },
    methods: {
    },
    filters: {
        fil(val, old) {
            return old == 1 ? val / 1000 + '万' : val / 10000 + '千'
        },
        timeout(val, old) {
            return old == 1 ? moment(val).format('YYYY-MM-DD') : moment(val).format('YYYY/MM/DD')
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
