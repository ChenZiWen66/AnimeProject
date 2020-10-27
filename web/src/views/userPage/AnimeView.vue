<template>
    <!--  视频内容界面  -->
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="col-md-12">
                        <Navigation/>
                    </div>
                    <div class="col-md-12">
                        <div class="area title">
                            <h1>
                                <span>
                                    <a href="#">国产动漫</a>：
                                </span>
                                <span class="names">陈子文的一天</span>
                            </h1>
                        </div>
                    </div>
                    <div class="col-md-8" >
                        <ViewLeftContent/>
                    </div>
                    <!-- 推荐动漫 -->
                    <div class="col-md-4">
                        <RecommendAnime/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation from "../../components/Navigation";
    import RecommendAnime from "../../components/RecommendAnime";
    import ViewLeftContent from "../../components/ViewLeftContent";

    export default {
        name: "AnimeView",
        components: {
            Navigation, RecommendAnime, ViewLeftContent
        }
    }
</script>

<style scoped>
    .title {
        height: 42px;
        border-bottom: solid 1px #ddd;
    }

    .area {
        width: 960px;
        margin: 0 auto;
        clear: both;
        text-align: left;
    }

    .title h1 {
        font-size: 24px;
        font-family: "Microsoft YaHei", serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 14px;
        margin: 0;
        padding: 0;
        font-weight: 400;
    }

    h1 {
        display: block;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        font-weight: bold;
    }
</style>