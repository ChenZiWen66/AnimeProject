<template>
    <!--管理页面标题 高50px-->
    <div>
        <div class="col-md-12 manageTitle">
            <img class="titleImg" alt="图标" src="../../assets/xiaolan.jpg">
            <span class="titleLabel">
                <span id="titleLabel_1">动漫管理页面</span>
            </span>
            <!--用户设置-->
            <span class="countOption">
                <span class="glyphicon glyphicon-off titleIcon" aria-hidden="true"/>
                <span class="titleLabel"><span id="titleLabel_2">账户设置</span></span>
            </span>
            <span class="quit">
                <span class="glyphicon  glyphicon-cog titleIcon" aria-hidden="true"/>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManageTitle"
    }
</script>

<style scoped>
    .manageTitle {
        height: 50px;
        background-color: rgba(18, 26, 44, 1);
    }

    .titleImg {
        float: left;
        width: 101px;
        height: 48px;
        margin-top: 1px;
    }

    .titleLabel {
        float: left;
        width: 185px;
        height: 29px;
        font-family: "Microsoft YaHei", 微软雅黑, serif;
        font-weight: 400;
        font-style: normal;
        font-size: 18px;
        color: #CCCCCC;
    }

    #titleLabel_1 {
        float: left;
        margin-top: 10px;

    }

    #titleLabel_2 {
        float: left;
        margin-top: 10px;
    }

    .titleIcon {
        font-size: 25px;
        align-content: space-between;
        color: white;
        margin-top: 10px;
    }

    .countOption {
        float: right;
    }

    .quit {
        float: right;
    }

</style>