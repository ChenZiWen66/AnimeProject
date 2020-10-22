<template>
    <!--内容管理界面-->
    <div class="container-fluid">
        <div class="row">
            <ManageTitle/>
        </div>
        <div class="row">
            <div class="col-md-2" style="background-color: rgba(25, 35, 60, 1);height:559px">
                <LeftMenu/>
            </div>
            <div class="col-md-10">
                右侧内容栏
            </div>
        </div>
    </div>
</template>

<script>
    import ManageTitle from "../components/Management/ManageTitle";
    import LeftMenu from "../components/Management/LeftMenu";

    export default {
        name: "ManagePage",
        components:{
            ManageTitle,
            LeftMenu
        }
    }
</script>

<style scoped>

</style>