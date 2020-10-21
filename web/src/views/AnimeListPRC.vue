<template>
<!--国产动漫界面-->
    <div class="contain-fluid">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="col-md-12">
                    <PageTop/>
                </div>
                <div class="col-md-12">
                    <Navigation/>
                </div>
                <div class="col-md-12">
                    <h2>好看的国产动漫</h2>
                </div>
                <div class="col-md-12">
                    <TagList/>
                </div>
                <!--       内容栏            -->
                <div class="col-md-12" style="background-color: chartreuse">
                    <MediaContent title="搞笑童话"/>
                    <MediaContent title="格斗冒险"/>
                    <MediaContent title="运动恋爱"/>
                    <MediaContent title="神魔科幻"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageTop from "../components/PageTop";
    import Navigation from "../components/Navigation";
    import TagList from "../components/TagList";
    import MediaContent from "../components/MediaContent";

    export default {
        name: "AnimeListMovie",
        components: {
            Navigation,
            PageTop,
            TagList,
            MediaContent
        }
    }
</script>

<style scoped>

</style>