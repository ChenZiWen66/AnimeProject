<template>
    <div class="row">
        <div class="col-md-3">
            <div class="col-md-12 tagBox">
                <div class="col-md-12">
                    <label>按地区/时间</label>
                </div>
                <div class="col-md-12">
                    <ul>
                        <li><a href="#">日本</a></li>
                        <li><a href="#">大陆</a></li>
                        <li><a href="#">美国</a></li>
                        <li><a href="#">英国</a></li>
                    </ul>
                </div>
                <div class="col-md-12">
                    <ul>
                        <li><a href="#">2020</a></li>
                        <li><a href="#">2019</a></li>
                        <li><a href="#">2018</a></li>
                        <li><a href="#">2017</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="col-md-12 tagBox">
                <div class="col-md-12">
                    <label>按类型</label>
                </div>
                <div class="col-md-12">
                    <ul>
                        <li><a href="#">热血</a></li>
                        <li><a href="#">格斗</a></li>
                        <li><a href="#">恋爱</a></li>
                        <li><a href="#">校园</a></li>
                        <li><a href="#">搞笑</a></li>
                        <li><a href="#">LOLI</a></li>
                        <li><a href="#">神魔</a></li>
                        <li><a href="#">机战</a></li>
                        <li><a href="#">科幻</a></li>
                        <li><a href="#">真人</a></li>
                        <li><a href="#">青春</a></li>
                        <li><a href="#">魔法</a></li>
                        <li><a href="#">美少女</a></li>
                    </ul>
                </div>
                <div class="col-md-12">
                    <ul>
                        <li><a href="#">神话</a></li>
                        <li><a href="#">冒险</a></li>
                        <li><a href="#">运动</a></li>
                        <li><a href="#">竞技</a></li>
                        <li><a href="#">童话</a></li>
                        <li><a href="#">亲子</a></li>
                        <li><a href="#">教育</a></li>
                        <li><a href="#">励志</a></li>
                        <li><a href="#">剧情</a></li>
                        <li><a href="#">社会</a></li>
                        <li><a href="#">后宫</a></li>
                        <li><a href="#">战争</a></li>
                        <li><a href="#">吸血鬼</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="row tagBox">
                <div class="col-md-12">
                    <label>按语言</label>
                </div>
                <div class="col-md-12">
                    <ul>
                        <li><a href="#">日语</a></li>
                        <li><a href="#">国语</a></li>
                        <li><a href="#">粤语</a></li>
                    </ul>
                </div>
                <div class="col-md-12">
                    <ul>
                        <li><a href="#">英语</a></li>
                        <li><a href="#">韩语</a></li>
                        <li><a href="#">方言</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TagList"
    }
</script>

<style scoped>
    .tagBox {
        float: left;
    }

    .tagBox label {
        float: left;
        margin: auto;
        padding: 6px 10px;
        height: 30px;
        line-height: 24px;
        font-weight: bolder;
        white-space: nowrap;
        background: #909090;
        color: #fff;
    }


    .tagBox li {
        width: 30px;
        float: left;
        overflow: hidden;
        padding-top: 10px;
        padding-right: 2px;
    }


    .tagList li {
        /*float: left;*/
        line-height: 18px;
        list-style: none;
        align-content: space-between;
    }

</style>