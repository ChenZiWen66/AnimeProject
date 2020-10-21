<template>
    <!--视频播放界面-->
    <div>
        <div class="container-fluid">
            <div class="row">
                <!--顶部导航栏-->
                <div class="col-md-10 col-md-offset-1">
                    <div class="col-md-12">
                        <Navigation/>
                    </div>
                    <!--播放页面-->
                    <div class="col-md-12">
                        <AnimePlayerComponent/>
                    </div>
                    <!--播放地址-->
                    <div class="col-md-12">
                        <AnimeAddressList/>
                    </div>
                    <!--播放地址-->
                    <div class="col-md-12">
                        <AnimeAddressList/>
                    </div>
                    <!--最近推荐-->
                    <div class="col-md-12">
                        <RelativeAnime/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation";
    import AnimePlayerComponent from "../components/AnimePlayerComponent";
    import AnimeAddressList from "../components/AnimeAddressList";
    import RelativeAnime from "../components/RelativeAnime";

    export default {
        name: "AnimePlay",
        components: {
            RelativeAnime,
            AnimeAddressList,
            AnimePlayerComponent,
            Navigation
        }
    }
</script>

<style scoped>

</style>