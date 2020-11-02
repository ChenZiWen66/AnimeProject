<template>
    <!--这是一个动漫信息上传的模态框-->
    <div>
        <div>
            <div class="modal fade" id="animeChapterUploadModal" tabindex="-1" role="dialog"
                 aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                                    @click="quitModal()"><span
                                    aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="ModalTitleLabel_ChapterUpload">上传章节</h4>
                        </div>
                        <div class="modal-body">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="animeName_ChapterUpload" class="col-md-3 control-label">动漫名</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" id="animeName_ChapterUpload"
                                               :placeholder="anime_name" v-model="anime_name"
                                               disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="chapterName_ChapterUpload" class="col-md-3 control-label">章节名</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" id="chapterName_ChapterUpload"
                                               placeholder="请输入章节名" v-model="chapter_name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="chapterCover" class="col-md-3 control-label">封面路径</label>
                                    <div class="col-md-9">
                                        <input type="file" id="chapterCover" @change="change_CoverImgInput()"
                                               accept="image/jpg,image/jpeg,image/png,image/PNG">
                                    </div>
                                    <p class="help-block col-md-12">点击按钮上传章节封面</p>
                                    <div class="col-md-12">
                                        <img :src="chapter_cover_src" alt="章节封面">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="chapterVideo" class="col-md-3 control-label">视频路径</label>
                                    <div class="col-md-9">
                                        <input type="file" id="chapterVideo" @change="change_VideoInput()">
                                    </div>
                                    <p class="help-block col-md-12">点击按钮上传视频</p>
                                    <div class="col-md-12">
                                        <AliPlayerManage ref="player"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal" @click="quitModal()">关闭
                            </button>
                            <button type="button" class="btn btn-primary" @click="uploadChapter()">上传剧集</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    import AliPlayerManage from "./AliPlayerManage";
    import {globalBus} from "../GlobalBus";

    export default {
        name: "AnimeChapterUploadModel",
        components: {
            AliPlayerManage
        },
        data() {
            return {
                //动漫信息
                anime_name: '',
                anime_id: '',
                anime_uuid: '',

                //剧集信息
                chapter_name: '',
                chapter_video_src: '',
                chapter_cover_src: "https://czwhub.oss-cn-shanghai.aliyuncs.com/xiaolan.jpg",
                chapter_uuid: '',

                //其他
                is_selectCover: false,//是否选择了封面
                is_selectVideo: false,//是否选择了视频
            }
        },
        mounted() {
            let _this = this;
            globalBus.$on("send_anime_info2ChapterManage", function (animeInfo) {
                let animeInfoJSON = JSON.parse(animeInfo);
                _this.anime_name = animeInfoJSON.anime_name;
                _this.anime_id = animeInfoJSON.anime_id;
                _this.anime_uuid = animeInfoJSON.anime_uuid;
            })
        },
        methods: {
            change_CoverImgInput() {
                let _this = this;
                _this.is_selectCover = true;
                //根据ref得到图片文件
                let file = document.querySelector("#chapterCover").files[0];
                //使用h5的读取文件api
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    _this.chapter_cover_src = this.result;
                }
            },
            change_VideoInput() {
                console.log("修改了视频路径");
                let _this = this;
                _this.is_selectVideo = true;
                let file = document.querySelector("#chapterVideo").files[0];
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    globalBus.$emit("videoInfo_manage", ["title", this.result, _this.chapter_cover_src]);
                }
            },
            quitModal() {
                console.log("退出了模态框,初始化信息");
                let _this = this;
                _this.chapter_name = '';
                _this.chapter_video_src = '';
                _this.chapter_cover_src = "https://czwhub.oss-cn-shanghai.aliyuncs.com/xiaolan.jpg";
                _this.chapter_uuid = '';
                _this.$refs.player.deletePlayer();
                _this.is_selectCover = false;//是否选择了封面
                _this.is_selectVideo = false;//是否选择了视频
            },
            async uploadChapter() {
                console.log("开始提交章节信息");
                let _this = this;
                let chapterUUID = this.$uuid.v1();//章节的UUID
                //上传章节封面
                let cover_file = document.querySelector("#chapterCover").files[0];
                let cover_file_name = cover_file.name;//文件名
                let cover_type = cover_file_name.substring(cover_file_name.lastIndexOf("."));//后缀
                let coverOSS_URL = await _this.upLoadFile2OSS(cover_file, _this.anime_uuid + '/' + chapterUUID + '/cover' + cover_type);
                //上传章节视频
                let video_file = document.querySelector("#chapterVideo").files[0];
                let video_file_name = video_file.name;//文件名
                let video_type = video_file_name.substring(video_file_name.lastIndexOf("."));//后缀
                let videoOSS_URL = await _this.upLoadFile2OSS(video_file, _this.anime_uuid + '/' + chapterUUID + '/video' + video_type);
                //上传信息
                let formData = new window.FormData();
                formData.append("chapter_name", _this.chapter_name);
                formData.append("chapter_video_src", videoOSS_URL);
                formData.append("chapter_cover_src", coverOSS_URL);
                formData.append("parent", _this.anime_uuid);
                formData.append("uuid", chapterUUID);

                try {
                    this.$http.post("http://localhost:9001/insertChapterInfo",formData).then(function (response) {
                        console.log("上传成功");
                    });
                }catch (e) {
                    console.log("上传失败");
                }

            },
            upLoadFile2OSS(file, oss_src) {
                let _this = this;
                let formData = new window.FormData();
                formData.append("file",file);
                formData.append("src",oss_src);
                _this.$http.post("http://localhost:9002/uploadFile2OSS",formData).then(function (response) {
                    return response.data.fileUrl_OSS;
                })
            },
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