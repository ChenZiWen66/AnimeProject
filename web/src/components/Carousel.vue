<template>
    <!--  轮播栏组件  -->
    <div class="row">
        <div id="video-carousel" class="carousel slide col-md-12" data-ride="carousel">
            <!-- 标签 -->
            <ol class="carousel-indicators">
                <li data-target="#video-carousel" data-slide-to="0" class="active"/>
                <li data-target="#video-carousel" data-slide-to="1"/>
                <li data-target="#video-carousel" data-slide-to="2"/>
            </ol>

            <!-- 每页内容 -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <div>
                        <img src="../assets/xiaolan.jpg" alt="../../public/xiaolan.jpg">
                        <img src="../assets/xiaolan.jpg" alt="../../public/xiaolan.jpg">
                        <img src="../assets/xiaolan.jpg" alt="../../public/xiaolan.jpg">
                    </div>
                    <div class="carousel-caption">
                        动漫名称1-1
                    </div>
                </div>
                <div class="item">
                    <div>
                        <img src="../assets/xiaolan.jpg" alt="../../public/xiaolan.jpg">
                        <img src="../assets/xiaolan.jpg" alt="../../public/xiaolan.jpg">
                        <img src="../assets/xiaolan.jpg" alt="../../public/xiaolan.jpg">
                    </div>
                    <div class="carousel-caption">
                        动漫名称2-2
                    </div>
                </div>
                <div class="item">
                    <div>
                        <img src="../assets/xiaolan.jpg" alt="../../public/xiaolan.jpg">
                        <img src="../assets/xiaolan.jpg" alt="../../public/xiaolan.jpg">
                        <img src="../assets/xiaolan.jpg" alt="../../public/xiaolan.jpg">
                    </div>
                    <div class="carousel-caption">
                        动漫名称3-3
                    </div>
                </div>
            </div>

            <!-- 控制 -->
            <a class="left carousel-control" href="#video-carousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"/>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#video-carousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"/>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Carousel"
    }
</script>

<style scoped>
    #video-carousel {
        width: 100%;
        height: 210px;
    }

    .carousel-inner img {
        width: 300px;
        height: 210px;
        margin-right: 30px;
    }
</style>