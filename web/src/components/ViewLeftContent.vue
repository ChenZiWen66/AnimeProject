<template>
    <!--  动漫内容组件  -->
    <div class="row">
        <div class="col-md-4 cover">
            <img src="../assets/xiaolan.jpg" alt="动漫名称">
        </div>
        <div class="col-md-8 animeInfo">
            <div class="col-md-12">
                <span>打分</span>
            </div>
            <div class="col-md-12">
                <span>别名:陳子文の一日</span>
            </div>
            <div class="col-md-6">
                <span>地区:中国</span>
            </div>
            <div class="col-md-6">
                <span>类别:治愈，日常</span>
            </div>
            <div class="col-md-6">
                <span>年代：2020</span>
            </div>
            <div class="col-md-6">
                <span>标签：国语，TV</span>
            </div>
            <div class="col-md-12">
                <span>索引：动漫</span>
            </div>
            <div class="col-md-12">
                <span>更新至第6话，每天更新一集</span>
            </div>
            <div class="col-md-12" style="position: absolute;bottom: 0">
                <span>点赞按钮，投币按钮，收藏按钮</span>
            </div>
        </div>

        <!--     播放地址导航栏一      -->
        <div class="col-md-12">
            <AnimeAddressList/>
        </div>
        <!--     播放地址导航栏二      -->
        <div class="col-md-12">
            <AnimeAddressList/>
        </div>
        <div class="col-md-12">
            <RelativeAnime/>
        </div>
        <div class="col-md-12">
            <AnimeDescribe/>
        </div>
    </div>
</template>

<script>
    import AnimeAddressList from "./AnimeAddressList";
    import RelativeAnime from "./RelativeAnime";
    import AnimeDescribe from "./AnimeDescribe";

    export default {
        name: "ViewLeftContent",
        components:{
            AnimeDescribe,
            RelativeAnime,
            AnimeAddressList
        }
    }
</script>

<style scoped>
    .l {
        float: left;
    }

    .cover img {
        width: 200px;
        height: 300px;
    }
    .animeInfo{
        height: 300px;
    }
    .animeInfo span{
        float: left;
    }
</style>