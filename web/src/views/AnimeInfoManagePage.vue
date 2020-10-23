<template>
    <!--信息管理界面，里面可以查看和修改动漫信息-->
    <div class="contain-fluid">
        <!--顶部搜索栏、3个下拉栏可以按照地区、标签、分类筛选-->
        <div class="row">
            <div class="col-md-12">
                <nav class="navbar navbar-default">
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <form class="navbar-form navbar-left">
                            <div class="form-group">
                                <label>
                                    <select class="form-control">
                                        <option>不限地区</option>
                                        <option>地区1</option>
                                        <option>地区2</option>
                                        <option>地区3</option>
                                        <option>地区4</option>
                                        <option>地区5</option>
                                    </select>
                                </label>
                                <label>
                                    <select class="form-control">
                                        <option>不限分类</option>
                                        <option>分类1</option>
                                        <option>分类2</option>
                                        <option>分类3</option>
                                        <option>分类4</option>
                                        <option>分类5</option>
                                    </select>
                                </label>
                                <label>
                                    <select class="form-control">
                                        <option>不限标签</option>
                                        <option>标签1</option>
                                        <option>标签2</option>
                                        <option>标签3</option>
                                        <option>标签4</option>
                                        <option>标签5</option>
                                    </select>
                                </label>
                                <button type="button" class="btn btn-default">搜索</button>
                            </div>
                        </form>
                        <form class="navbar-form navbar-right">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Search">
                            </div>
                            <button type="submit" class="btn btn-default">关键词搜索</button>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
        <!--中间的是信息栏-->
        <div class="row midContent">
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="../assets/xiaolan.jpg" alt="动漫封面">
                    <div class="caption">
                        <div>
                            <h4>《陈子文的一天》</h4>
                        </div>
                        <div>
                            <label>
                                一共6集
                                <select multiple class="form-control">
                                    <option>第1集</option>
                                    <option>第2集</option>
                                    <option>第3集</option>
                                    <option>第4集</option>
                                    <option>第5集</option>
                                    <option>OVA</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <div class="btn-group btn-group-xs" role="group">
                                <!--点击后弹出上传剧集的模态框，可以上传剧集-->
                                <button type="button" class="btn btn-default">上传剧集</button>
                                <!--点击后删除该动漫，以及它所有的剧集-->
                                <button type="button" class="btn btn-default">删除动漫</button>
                                <!--点击后弹出修改信息的模态框，可以修改信息-->
                                <button type="button" class="btn btn-default">修改信息</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="../assets/xiaolan.jpg" alt="动漫封面">
                    <div class="caption">
                        <div>
                            <h4>《陈子文的一天》</h4>
                        </div>
                        <div>
                            <label>
                                一共6集
                                <select multiple class="form-control">
                                    <option>第1集</option>
                                    <option>第2集</option>
                                    <option>第3集</option>
                                    <option>第4集</option>
                                    <option>第5集</option>
                                    <option>OVA</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <div class="btn-group btn-group-xs" role="group">
                                <!--点击后弹出上传剧集的模态框，可以上传剧集-->
                                <button type="button" class="btn btn-default">上传剧集</button>
                                <!--点击后删除该动漫，以及它所有的剧集-->
                                <button type="button" class="btn btn-default">删除动漫</button>
                                <!--点击后弹出修改信息的模态框，可以修改信息-->
                                <button type="button" class="btn btn-default">修改信息</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="../assets/xiaolan.jpg" alt="动漫封面">
                    <div class="caption">
                        <div>
                            <h4>《陈子文的一天》</h4>
                        </div>
                        <div>
                            <label>
                                一共6集
                                <select multiple class="form-control">
                                    <option>第1集</option>
                                    <option>第2集</option>
                                    <option>第3集</option>
                                    <option>第4集</option>
                                    <option>第5集</option>
                                    <option>OVA</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <div class="btn-group btn-group-xs" role="group">
                                <!--点击后弹出上传剧集的模态框，可以上传剧集-->
                                <button type="button" class="btn btn-default">上传剧集</button>
                                <!--点击后删除该动漫，以及它所有的剧集-->
                                <button type="button" class="btn btn-default">删除动漫</button>
                                <!--点击后弹出修改信息的模态框，可以修改信息-->
                                <button type="button" class="btn btn-default">修改信息</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="../assets/xiaolan.jpg" alt="动漫封面">
                    <div class="caption">
                        <div>
                            <h4>《陈子文的一天》</h4>
                        </div>
                        <div>
                            <label>
                                一共6集
                                <select multiple class="form-control">
                                    <option>第1集</option>
                                    <option>第2集</option>
                                    <option>第3集</option>
                                    <option>第4集</option>
                                    <option>第5集</option>
                                    <option>OVA</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <div class="btn-group btn-group-xs" role="group">
                                <!--点击后弹出上传剧集的模态框，可以上传剧集-->
                                <button type="button" class="btn btn-default">上传剧集</button>
                                <!--点击后删除该动漫，以及它所有的剧集-->
                                <button type="button" class="btn btn-default">删除动漫</button>
                                <!--点击后弹出修改信息的模态框，可以修改信息-->
                                <button type="button" class="btn btn-default">修改信息</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--下面部分是分页栏-->
        <div class="row bottomContent">
            <div class="col-md-12">
                <AnimeManagementPagination/>
            </div>
        </div>
    </div>
</template>

<script>
    import AnimeManagementPagination from "../components/Management/AnimeManagementPagination";

    export default {
        name: "AnimeInfoManagePage",
        components: {
            AnimeManagementPagination
        }
    }
</script>

<style scoped>
    img {
        width: 136px;
        height: 180px;
    }

    select {
        width: 200px;
    }

    .thumbnail{
        background-color: cornsilk;
    }
</style>