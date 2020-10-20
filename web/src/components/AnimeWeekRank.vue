<template>
    <!--  一周动漫排行榜  -->
    <div class="row">
        <!--    标题    -->
        <div class="col-md-12 title">
            <h2>一周动漫排行榜</h2>
        </div>
        <div class="col-md-12">
            <ol>
                <li>
                    <MediaBrowser title="陈子文的一天" type="日常" state="12集全" describe="陈子文一天好忙啊_(:з」∠)_"/>
                </li>
                <li>
                    <MediaBrowser title="陈子文的一天" type="日常" state="12集全" describe="陈子文一天好忙啊_(:з」∠)_"/>
                </li>
                <li>
                    <MediaBrowser title="陈子文的一天" type="日常" state="12集全" describe="陈子文一天好忙啊_(:з」∠)_"/>
                </li>
                <li>
                    <MediaBrowser title="陈子文的一天" type="日常" state="12集全" describe="陈子文一天好忙啊_(:з」∠)_"/>
                </li>
                <li>
                    <MediaBrowser title="陈子文的一天" type="日常" state="12集全" describe="陈子文一天好忙啊_(:з」∠)_"/>
                </li>
                <li>
                    <MediaBrowser title="陈子文的一天" type="日常" state="12集全" describe="陈子文一天好忙啊_(:з」∠)_"/>
                </li>
                <li>
                    <MediaBrowser title="陈子文的一天" type="日常" state="12集全" describe="陈子文一天好忙啊_(:з」∠)_"/>
                </li>
                <li>
                    <MediaBrowser title="陈子文的一天" type="日常" state="12集全" describe="陈子文一天好忙啊_(:з」∠)_"/>
                </li>
                <li>
                    <MediaBrowser title="陈子文的一天" type="日常" state="12集全" describe="陈子文一天好忙啊_(:з」∠)_"/>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
    import MediaBrowser from "./MediaBrowser";

    export default {
        name: "AnimeWeekRank",
        components: {
            MediaBrowser
        }
    }
</script>

<style scoped>
    .title h2 {
        font-size: 18px;
        font-family: "Microsoft YaHei", 微软雅黑, serif;
        color: rgb(252, 139, 187);
        font-weight: 700;
        float: left;
        overflow: hidden;
    }
</style>