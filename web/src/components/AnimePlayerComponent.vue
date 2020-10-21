<template>
    <div class="row">
        <div class="col-md-12">
            <!--     路径栏       -->
            <div class="col-md-12">
                <TradeNavigation/>
            </div>
            <!--     标题       -->
            <div class="col-md-12">
                <h2>陈子文的一天</h2>
            </div>
            <!--     播放器       -->
            <div class="col-md-12">
                <AliPlayerTest/>
            </div>
        </div>
    </div>
</template>

<script>
    import TradeNavigation from "./TradeNavigation";
    import AliPlayerTest from "./AliPlayerTest";

    export default {
        name: "AnimePlayerComponent",
        components: {AliPlayerTest, TradeNavigation}
    }
</script>

<style scoped>

</style>