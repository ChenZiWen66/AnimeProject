<template>
    <!--  主界面  -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <!--        顶部导航栏        -->
                <div class="row">
                    <div class="col-md-12" style="background-color: antiquewhite">
                        <PageTop/>
                    </div>
                </div>
                <!--       顶部标签栏         -->
                <div class="row">
                    <div class="col-md-12" style="background-color: #42b983">
                        顶部标签
                    </div>
                </div>
                <!--       轮播栏            -->
                <div class="row">
                    <div class="col-md-12" style="background-color: cornsilk">
                        轮播栏
                    </div>
                </div>
                <!--       tag标签栏            -->
                <div class="row">
                    <div class="col-md-12" style="background-color: aquamarine">
                        标签栏
                    </div>
                </div>
                <!--       内容栏            -->
                <div class="row">
                    <div class="col-md-9" style="background-color: chartreuse">
                        内容栏
                    </div>
                    <div class="col-md-3" style="background-color: cornflowerblue">
                        每日更新列表
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageTop from "../components/PageTop";

    export default {
        name: "Main",
        components: {
            PageTop
        }
    }
</script>

<style scoped>

</style>