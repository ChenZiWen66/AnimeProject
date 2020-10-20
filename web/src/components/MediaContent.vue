<template>
    <div class="row">
        <!--   顶部题目     -->
        <div class="col-md-12 tame">
            <h2>{{title}}</h2>
            <span class="more"><a href="#">更多</a></span>
        </div>
        <div class="col-md-12 tame">
            <ul>
                <li>
                    <img src="../assets/xiaolan.jpg" alt="这是图片">
                    <p>这是标题</p>
                </li>
                <li>
                    <img src="../assets/xiaolan.jpg" alt="这是图片">
                    <p>这是标题</p>
                </li>
                <li>
                    <img src="../assets/xiaolan.jpg" alt="这是图片">
                    <p>这是标题</p>
                </li>
                <li>
                    <img src="../assets/xiaolan.jpg" alt="这是图片">
                    <p>这是标题</p>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        name: "MediaContent",
        props: {
            title: ""
        }
    }
</script>

<style scoped>
    .tame h2 {
        font-size: 18px;
        font-family: "Microsoft YaHei", 微软雅黑, serif;
        color: rgb(252, 139, 187);
        font-weight: 700;
        float: left;
        overflow: hidden;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .tame .more {
        font-size: 18px;
        font-family: "Microsoft YaHei", 微软雅黑, serif;
        font-weight: 700;
        float: right;
        overflow: hidden;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .tame ul {
        float: left;
    }

    .tame li{
        float: left;
        list-style: none;
    }
    .tame img {
        width: 136px;
        height: 180px;
    }

</style>