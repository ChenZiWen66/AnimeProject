<template>
    <!--  视频播放列表  -->
    <div class="row">
        <div class="col-md-12">
            <ul class="nav nav-tabs">
                <li role="presentation" class="disabled"><a href="#">播放地址一</a></li>
                <li role="presentation" class="active"><a href="#">升序</a></li>
                <li role="presentation"><a href="#">降序</a></li>
            </ul>
        </div>
        <div class="col-md-12">
            <div class="col-md-12">
                <div class="btn-group-xs" role="group">
                    <button type="button" class="btn btn-default">第一集</button>
                    <button type="button" class="btn btn-default">第二集</button>
                    <button type="button" class="btn btn-default">第三集</button>
                    <button type="button" class="btn btn-default">第四集</button>
                    <button type="button" class="btn btn-default">第五集</button>
                    <button type="button" class="btn btn-default">第六集</button>
                    <button type="button" class="btn btn-default">第七集</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AnimeAddressList"
    }
</script>

<style scoped>
    .btn-group-xs button{
        float: left;
    }
</style>