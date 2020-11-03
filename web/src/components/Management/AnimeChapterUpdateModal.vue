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
                                    <input type="file" id="uploadChapterCover">
                                </div>
                                <p class="help-block col-md-12">点击按钮修改章节封面</p>
                                <div class="col-md-12">
                                    <img :src="chapter_cover_src" alt="章节封面">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <AliPlayerManage ref="player"/>
                            </div>
                            <div class="col-md-12">
                                <button type="button" class="btn btn-danger">删除这一集</button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" @click="closeModal">取消
                        </button>
                        <button type="button" class="btn btn-primary">确认修改</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {globalBus} from "../GlobalBus";
    import AliPlayerManage from "./AliPlayerManage";

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
                console.log("封面路径",_this.chapter_cover_src);
                console.log("视频路径",_this.chapter_video_src);
                _this.$refs.player.addPlayer(_this.chapter_name, _this.chapter_cover_src, _this.chapter_video_src);
                // globalBus.$emit("videoInfo_updateChapter", [_this.chapter_name, _this.chapter_video_src, _this.chapter_cover_src]);
            })
        },
        methods: {
            closeModal() {
                this.$refs.player.deletePlayer();
            }
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