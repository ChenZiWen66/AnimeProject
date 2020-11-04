<template>
    <!--这是动漫剧集信息更新的模态框-->
    <div>
        <div class="modal fade" id="animeChapterUpdateModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="ModalTitleLabel_ChapterUpdate">修改章节信息</h4>
                    </div>
                    <div class="modal-body">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="animeName_ChapterUpdate" class="col-md-3 control-label">动漫名</label>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" id="animeName_ChapterUpdate"
                                           :placeholder="anime_name"
                                           disabled>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="chapterName_ChapterUpdate" class="col-md-3 control-label">章节名</label>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" id="chapterName_ChapterUpdate"
                                           placeholder="原章节名" v-model="chapter_name">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="uploadChapterCover" class="col-md-3 control-label">修改封面</label>
                                <div class="col-md-9">
                                    <input type="file" id="uploadChapterCover" @change="changeCover"
                                           ref="ChapterCoverInput">
                                </div>
                                <p class="help-block col-md-12">点击按钮修改章节封面</p>
                                <div class="col-md-12">
                                    <img :src="chapter_cover_src" alt="章节封面">

                                </div>
                            </div>
                            <div class="form-group">
                                <label for="uploadChapterVideo" class="col-md-12 control-label">修改视频</label>
                                <div class="col-md-12">
                                    <input type="file" id="uploadChapterVideo" @change="changeVideo"
                                           ref="ChapterVideoInput">
                                </div>
                                <p class="help-block col-md-12">点击按钮修改剧集视频</p>
                            </div>
                            <div class="col-md-12">
                                <AliPlayerManage ref="player2"/>
                            </div>
                            <div class="col-md-12">
                                <button type="button" class="btn btn-danger" data-dismiss="modal"
                                        @click="deleteChapter">删除这一集
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" @click="closeModal">取消
                        </button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="submitUpdate">确认修改
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {globalBus} from "../GlobalBus";
    import AliPlayerManage from "./AliPlayerManage";
    import OSSFileUtils from "../utils/OSSFileUtils";

    export default {
        name: "AnimeChapterUpdateModel",
        components: {
            AliPlayerManage
        },
        data() {
            return {
                //剧集信息
                chapter_id: '',
                chapter_name: '剧集名称',
                chapter_uuid: '',
                chapter_parent: '',
                chapter_video_src: 'https://czwhub.oss-cn-shanghai.aliyuncs.com/SEVENS%20014..mp4',
                chapter_cover_src: "https://czwhub.oss-cn-shanghai.aliyuncs.com/acc8fc48-7a32-4804-84e4-1eee1aebb2b6%E6%B8%B8%E6%88%8F%E7%8E%8B18%E9%9B%86%E5%9B%BE%E7%89%87.jpg",
                anime_name: '动漫名称',//动漫名称

                //其他信息
                changed_cover: false,
                changed_video: false,
            }
        },
        mounted() {
            let _this = this;
            globalBus.$on("chapterInfo_2_UpdateModal", function (chapterInfoJSON) {
                let chapterInfo = JSON.parse(chapterInfoJSON);
                _this.chapter_id = chapterInfo.chapter_id;
                _this.chapter_name = chapterInfo.chapter_name;
                _this.chapter_uuid = chapterInfo.chapter_uuid;
                _this.chapter_parent = chapterInfo.chapter_parent;
                _this.chapter_video_src = chapterInfo.chapter_video_src;
                _this.chapter_cover_src = chapterInfo.chapter_cover_src;
                _this.anime_name = chapterInfo.anime_name;
                console.log("封面路径", _this.chapter_cover_src);
                console.log("视频路径", _this.chapter_video_src);
                _this.$refs.player2.addPlayer(_this.chapter_name, _this.chapter_cover_src, _this.chapter_video_src);
            })
        },
        methods: {
            initChapterInfoModal() {
                let _this = this;
                _this.chapter_id = '';
                _this.chapter_name = '剧集名称';
                _this.chapter_uuid = '';
                _this.chapter_parent = '';
                _this.chapter_video_src = 'https://czwhub.oss-cn-shanghai.aliyuncs.com/SEVENS%20014..mp4';
                _this.chapter_cover_src = "https://czwhub.oss-cn-shanghai.aliyuncs.com/acc8fc48-7a32-4804-84e4-1eee1aebb2b6%E6%B8%B8%E6%88%8F%E7%8E%8B18%E9%9B%86%E5%9B%BE%E7%89%87.jpg";
                _this.anime_name = '动漫名称';//动漫名称

                //其他信息
                _this.changed_cover = false;
                _this.changed_video = false;
            },
            changeVideo() {
                let _this = this;
                _this.changed_video = true;
                let file = _this.$refs.ChapterVideoInput.files[0];
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    console.log("即将播放视频");
                    _this.chapter_video_src = this.result;
                    _this.$refs.player2.addPlayer(_this.chapter_name, _this.chapter_cover_src, _this.chapter_video_src);
                };
            },
            changeCover() {
                let _this = this;
                _this.changed_cover = true;
                let file = _this.$refs.ChapterCoverInput.files[0];
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    console.log("修改了封面");
                    _this.chapter_cover_src = this.result;
                    _this.$refs.player2.addPlayer(_this.chapter_name, _this.chapter_cover_src, _this.chapter_video_src);
                };
            },
            closeModal() {
                this.$refs.player2.deletePlayer();
                this.initChapterInfoModal();
            },
            deleteChapter() {
                let _this = this;
                this.$refs.player2.deletePlayer();
                //获取剧集文件夹路径
                let chapterDir = _this.chapter_video_src.substring(0, _this.chapter_video_src.lastIndexOf("/"));
                console.log("将要删除文件夹，", chapterDir);
                OSSFileUtils.deleteOSSFile(chapterDir);

                //删除剧集数据库信息
                let formData_deleteInfo = new window.FormData();
                console.log("删除数据库信息,id=", _this.chapter_id);
                formData_deleteInfo.append("id", _this.chapter_id);
                try {
                    _this.$http.post("http://localhost:9001/deleteChapterInfo", formData_deleteInfo).then(function (response) {
                        console.log("删除信息成功");
                    })
                } catch (e) {
                    console.log("删除信息失败");
                }
                this.initChapterInfoModal();
            },
            async submitUpdate() {
                this.$refs.player2.deletePlayer();
                let _this = this;
                let coverOSS_URL;
                let videoOSS_URL;
                if (_this.changed_cover) {
                    console.log("修改了章节封面，将要上传");
                    let cover_file = _this.$refs.ChapterCoverInput.files[0];
                    let cover_file_name = cover_file.name;//文件名
                    let cover_type = cover_file_name.substring(cover_file_name.lastIndexOf("."));//后缀
                    await OSSFileUtils.upLoadFile2OSS(cover_file, _this.chapter_parent + '/' + _this.chapter_uuid + '/cover' + cover_type).then(function (response) {
                        coverOSS_URL = response;
                    });
                } else {
                    coverOSS_URL = _this.chapter_cover_src;
                }
                if (_this.changed_video) {
                    console.log("修改了章节视频，将要上传");
                    let video_file = _this.$refs.ChapterCoverInput.files[0];
                    let video_file_name = video_file.name;//文件名
                    let video_type = video_file_name.substring(video_file_name.lastIndexOf("."));//后缀
                    await OSSFileUtils.upLoadFile2OSS(video_file, _this.chapter_parent + '/' + _this.chapter_uuid + '/video' + video_type).then(function (response) {
                        videoOSS_URL = response;
                    });
                } else {
                    videoOSS_URL = _this.chapter_video_src;
                }
                let formData = new window.FormData();
                formData.append("id", _this.chapter_id);
                formData.append("chapter_name", _this.chapter_name);
                formData.append("chapter_video_src", videoOSS_URL);
                formData.append("chapter_cover_src", coverOSS_URL);
                formData.append("parent", _this.chapter_parent);
                formData.append("uuid", _this.chapter_uuid);
                try {
                    _this.$http.post("http://localhost:9001/updateChapterInfo", formData).then(function (response) {
                        console.log("更新章节信息成功");
                    })
                } catch (e) {
                    console.log("更新章节信息失败");
                }
                this.initChapterInfoModal();
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