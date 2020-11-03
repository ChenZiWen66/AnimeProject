<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <AliPlayerManage ref="player1"/>
        </div>
        <div class="col-md-12">
            <button @click="click_btn"/>
        </div>

    </div>
</template>

<script>
    import AliPlayerManage from "../components/Management/AliPlayerManage";

    export default {
        name: "Test",
        components: {
            AliPlayerManage
        },
        methods: {
            click_btn(){
                this.$refs.player1.addPlayer('标题',"https://czwhub.oss-cn-shanghai.aliyuncs.com/xiaolan.jpg","https://czwhub.oss-cn-shanghai.aliyuncs.com/SEVENS%20014..mp4");
            }
        }
    }
</script>

<style scoped>

</style>