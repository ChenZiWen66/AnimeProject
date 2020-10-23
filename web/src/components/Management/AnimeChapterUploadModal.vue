<template>
    <!--这是一个动漫信息上传的模态框-->
    <div>
        <div>
            <div class="modal fade" id="animeChapterUploadModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="ModalTitleLabel_ChapterUpload">上传章节</h4>
                        </div>
                        <div class="modal-body">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="animeName_ChapterUpload" class="col-md-3 control-label">动漫名</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" id="animeName_ChapterUpload"
                                               placeholder="陈子文的一天(以后显示动漫名)"
                                               disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="chapterName_ChapterUpload" class="col-md-3 control-label">章节名</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" id="chapterName_ChapterUpload" placeholder="请输入章节名">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="uploadChapterCover" class="col-md-3 control-label">封面路径</label>
                                    <div class="col-md-9">
                                        <input type="file" id="uploadChapterCover">
                                    </div>
                                    <p class="help-block col-md-12">点击按钮上传章节封面</p>
                                    <div class="col-md-12">
                                        <img src="../../assets/xiaolan.jpg" alt="章节封面">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="uploadChapterVideo" class="col-md-3 control-label">视频路径</label>
                                    <div class="col-md-9">
                                        <input type="file" id="uploadChapterVideo">
                                    </div>
                                    <p class="help-block col-md-12">点击按钮上传视频</p>
                                    <div class="col-md-12">
                                        <AliPlayerTest/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button type="button" class="btn btn-primary">上传剧集</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AliPlayerTest from "../AliPlayerTest";

    export default {
        name: "AnimeChapterUploadModel",
        components: {
            AliPlayerTest
        }
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