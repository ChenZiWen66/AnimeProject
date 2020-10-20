<template>
    <!--  顶部标签  -->
    <div class="row">
        <!--    顶部图片    -->
        <div class="col-md-2">
            <img src="../assets/xiaolan.jpg" alt="顶部左侧图片" style="height: 42px;width: 182px">
        </div>
        <div class="col-md-6"></div>
        <div class="col-md-4">
            <ul class="dmus r">
                <li>
                    <img src="../assets/xiaolan.jpg" alt="顶部左侧图片" style="height: 18px;width: 18px;">
                    留言
                </li>
                <li>
                    <img src="../assets/xiaolan.jpg" alt="顶部左侧图片" style="height: 18px;width: 18px;">
                    排行榜
                </li>
                <li>
                    <img src="../assets/xiaolan.jpg" alt="顶部左侧图片" style="height: 18px;width: 18px;">
                    播放记录
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navigate"
    }
</script>

<style scoped>
    .dmus {
        width: 268px;
        overflow: hidden;
        margin-top: 14px;
    }

    .r {
        float: right;
    }

    .dmus li {
        float: left;
        line-height: 18px;
        list-style: none;
    }
</style>