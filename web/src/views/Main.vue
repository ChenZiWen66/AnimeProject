<template>
    <!--  主界面  -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <!--        页面顶部       -->
                <div class="row">
                    <div class="col-md-12" style="background-color: antiquewhite">
                        <PageTop/>
                    </div>
                </div>
                <!--       顶部导航栏         -->
                <div class="row">
                    <div class="col-md-12" style="background-color: #42b983">
                        <Navigation/>
                    </div>
                </div>
                <!--       轮播栏            -->
                <div class="row">
                    <div class="col-md-12" style="background-color: cornsilk">
                        <Carousel/>
                    </div>
                </div>
                <!--       tag标签栏            -->
                <div class="row">
                    <div class="col-md-12" style="background-color: aquamarine">
                        <TagList/>
                    </div>
                </div>
                <!--       内容栏            -->
                <div class="row">
                    <div class="col-md-8" style="background-color: chartreuse">
                        内容栏
                        <MediaContent title="最新更新"/>
                        <MediaContent title="日本动漫"/>
                        <MediaContent title="国产动漫"/>
                        <MediaContent title="美国动漫"/>
                        <MediaContent title="动漫电影"/>
                    </div>
                    <div class="col-md-4" style="background-color: cornflowerblue">
                        <DailyUpdateList/>
                        <AnimeWeekRank/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageTop from "../components/PageTop";
    import Navigation from "../components/Navigation";
    import Carousel from "../components/Carousel";
    import TagList from "../components/TagList";
    import MediaContent from "../components/MediaContent";
    import DailyUpdateList from "../components/DailyUpdateList";
    import AnimeWeekRank from "../components/AnimeWeekRank";

    export default {
        name: "Main",
        components: {
            PageTop, Navigation, Carousel, TagList, MediaContent,DailyUpdateList,AnimeWeekRank
        }
    }
</script>

<style scoped>

</style>