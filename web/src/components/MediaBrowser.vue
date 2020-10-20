<template>
    <div class="media">
        <div class="media-left">
            <a href="#">
                <img class="media-object" src="../assets/xiaolan.jpg" :alt="title">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">{{title}}</h4>
            <div> 状态:{{state}}</div>
            <div> 类型:{{type}}</div>
            <div>简介:{{describe}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MediaBrowser",
        props: {
            //标题
            title: "",
            //状态
            state: "",
            //类型
            type: "",
            //简介
            describe: "",
            //封面路径
            // coverSrc: ""
        }
    }
</script>

<style scoped>
    .media img {
        width: 100px;
        height: 100px;
        margin: 5px;
    }
</style>