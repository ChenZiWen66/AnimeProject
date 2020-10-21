<template>
    <div class="row">
        <div class="col-md-12">
            <label>《陈子文的一天》相关动漫</label>
        </div>
        <div class="col-md-12">
            <AnimeInfoView/>
            <AnimeInfoView/>
            <AnimeInfoView/>
            <AnimeInfoView/>
        </div>
    </div>
</template>

<script>
    import AnimeInfoView from "./AnimeInfoView";

    export default {
        name: "RelativeAnime",
        components: {
            AnimeInfoView
        }
    }
</script>

<style scoped>

</style>