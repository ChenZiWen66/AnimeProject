<template>
<!--这是动漫剧集信息更新的模态框-->
    <div>
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">修改章节信息</h4>
                    </div>
                    <div class="modal-body">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="animeName" class="col-sm-3 control-label">动漫名</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="animeName" placeholder="陈子文的一天(以后显示动漫名)"
                                           disabled>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="chapterName" class="col-sm-3 control-label">章节名</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="chapterName" placeholder="原章节名">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="uploadChapterCover" class="col-md-3 control-label">封面路径</label>
                                <div class="col-sm-9">
                                    <input type="file" id="uploadChapterCover">
                                </div>
                                <p class="help-block col-md-12">点击按钮修改章节封面</p>
                                <div class="col-md-12">
                                    <img src="../../assets/xiaolan.jpg" alt="章节封面">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <button type="button" class="btn btn-danger">删除这一集</button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary">确认修改</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AnimeChapterUpdateModel"
    }
</script>

<style scoped>
    label {
        margin-top: 5px;
    }

    img {
        height: 130px;
    }
</style>