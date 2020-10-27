<template>
    <!--内容管理界面-->
    <div class="container-fluid">
        <div class="row">
            <ManageTitle/>
        </div>
        <div class="row">
            <div class="col-md-2 leftMenu">
                <LeftMenu/>
            </div>
            <div class="col-md-10 rightContent">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import ManageTitle from "../../components/Management/ManageTitle";
    import LeftMenu from "../../components/Management/LeftMenu";

    export default {
        name: "ManagePage",
        components: {
            ManageTitle,
            LeftMenu
        }
    }
</script>

<style scoped>
    .leftMenu {
        background-color: #121A2C;
        height: 100vh;
        padding: 0
    }

    .rightContent {
        height: 100vh;
        padding: 0;
    }
</style>