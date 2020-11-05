<template>
    <!--这是一个动漫信息更新的模态框-->
    <div>
        <div class="modal fade" id="updateAnimeInfoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="ModalTitleLabel_UpdateInfo">修改动漫信息</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="animeName_UpdateAnimeInfo" class="col-md-3 control-label">动漫名</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" id="animeName_UpdateAnimeInfo"
                                               placeholder="请输入动漫名" v-model="animeName_input">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="alias" class="col-md-3 control-label">别名</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" id="alias" placeholder="请输入别名"
                                               v-model="alias_input">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="describe" class="col-md-3 control-label">描述</label>
                                    <div class="col-md-9">
                                        <textarea class="form-control" id="describe" placeholder="描述" rows="6"
                                                  v-model="anime_describe_input"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="animeYear" class="col-md-3 control-label">年代</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" id="animeYear" placeholder="年代"
                                               v-model="animeYear_input">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="animeIndex" class="col-md-3 control-label">索引</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" id="animeIndex" placeholder="索引"
                                               v-model="animeIndex_input">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="animeUpdateInfo" class="col-md-3 control-label">更新信息</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" id="animeUpdateInfo" placeholder="更新信息"
                                               v-model="animeUpdateInfo_input">
                                    </div>
                                </div>
                                <div class="form-group col-md-12">
                                    <label class="col-md-3 control-label">类型</label>
                                    <div class="col-md-9 checkboxBorder">
                                        <label class="checkbox-inline" v-for="type in typeList">
                                            <input type="checkbox" name="typeCheckbox" :value="type.uuid"
                                                   v-model="type_input">
                                            {{type.type_name}}
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group col-md-12">
                                    <label class="col-md-3 control-label">地区</label>
                                    <div class="col-md-9 checkboxBorder">
                                        <label class="checkbox-inline" v-for="zone in zoneList">
                                            <input type="checkbox" name="zoneCheckbox" :value="zone.uuid"
                                                   v-model="zone_input">
                                            {{zone.zone_name}}
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group col-md-12">
                                    <label class="col-md-3 control-label">标签</label>
                                    <div class="col-md-9 checkboxBorder">
                                        <label class="checkbox-inline" v-for="tag in tagList">
                                            <input type="checkbox" name="tagCheckbox" :value="tag.uuid"
                                                   v-model="tag_input">
                                            {{tag.tag_name}}
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputFile" class="col-md-3 control-label">封面路径</label>
                                    <div class="col-md-9">
                                        <input type="file" id="exampleInputFile" @change="changeCover()"
                                               ref="animeCoverInput">
                                        <p class="help-block">点击按钮上传图片</p>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <img :src="coverImgSrc" alt="选择的图片" class="img-thumbnail coverImg">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="click_btn_confirmSubmit">确认修改</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {globalBus} from "../GlobalBus";
    import OSSFileUtils from "../utils/OSSFileUtils";
    import AnimeInfoUtils from "../utils/AnimeInfoUtils";

    export default {
        name: "UpdateAnimeInfoModel",
        data() {
            return {
                success_alert_active: false,//警告框是否弹出
                danger_alert_active: false,
                success_alert_content: '成功信息',//警告框信息
                danger_alert_content: '危险信息',

                is_selectCover: false,//是否选择了封面
                zoneList: [],//地区信息列表
                typeList: [],//分类信息列表
                tagList: [],//标签信息列表

                //动漫信息
                anime_id: 0,//动漫id
                anime_uuid: '',//动漫uuid
                animeName_input: '',//输入的动漫名称
                alias_input: '',//输入的别名
                anime_describe_input: '',//输入的动漫描述
                animeYear_input: '',//输入的年份
                animeIndex_input: '',//输入的索引
                animeUpdateInfo_input: '',//输入的更新信息
                type_input: "",//选择的分类
                zone_input: "",//选择的地区
                tag_input: "",//选择的标签
                coverImgSrc: "",//封面路径

            }
        },
        mounted() {
            let _this = this;
            _this.getAttributeList();
            globalBus.$on("anime_info_Json", function (response) {
                let anime_info_json = JSON.parse(response);
                _this.anime_id = anime_info_json.anime_id;
                _this.anime_uuid = anime_info_json.anime_uuid;
                _this.animeName_input = anime_info_json.animeName_input;
                _this.alias_input = anime_info_json.alias_input;
                _this.anime_describe_input = anime_info_json.anime_describe_input;
                _this.animeYear_input = anime_info_json.animeYear_input;
                _this.animeIndex_input = anime_info_json.animeIndex_input;
                _this.animeUpdateInfo_input = anime_info_json.animeUpdateInfo_input;
                _this.type_input = anime_info_json.type_input;
                _this.zone_input = anime_info_json.zone_input;
                _this.tag_input = anime_info_json.tag_input;
                _this.coverImgSrc = anime_info_json.coverImgSrc;
            })
        },
        methods: {
            changeCover() {
                let _this = this;
                _this.is_selectCover = true;
                let file = _this.$refs.animeCoverInput.files[0];
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    console.log("修改了动漫封面");
                    _this.coverImgSrc = this.result;
                };
            },
            /**
             * 获取属性信息
             */
            getAttributeList() {
                let _this = this;
                this.$http.get("http://localhost:9001/showAnimeType").then(function (response) {
                    _this.typeList = response.data;
                });
                this.$http.get("http://localhost:9001/showAnimeZone").then(function (response) {
                    _this.zoneList = response.data;
                });
                this.$http.get("http://localhost:9001/showAnimeTag").then(function (response) {
                    _this.tagList = response.data;
                });
            },
            //点击修改按钮，开始执行修改功能
            async click_btn_confirmSubmit() {
                let _this = this;
                // 如果有修改动漫封面，那么将阿里云的图片封面替换成这个封面
                let coverOSS_URL;
                if (_this.is_selectCover) {
                    let cover_file = _this.$refs.animeCoverInput.files[0];
                    let cover_file_name = cover_file.name;//文件名
                    let cover_type = cover_file_name.substring(cover_file_name.lastIndexOf("."));//后缀
                    await OSSFileUtils.upLoadFile2OSS(cover_file, _this.anime_uuid + '/cover' + cover_type).then(function (response) {
                        coverOSS_URL = response;
                    });
                } else {
                    coverOSS_URL = _this.coverImgSrc;
                }
                // 创建表单，修改动漫信息数据
                await AnimeInfoUtils.updateAnimeInfo(_this.anime_id, _this.anime_uuid, _this.animeName_input, _this.type_input.toString(), _this.zone_input.toString(), _this.tag_input.toString(), _this.anime_describe_input, _this.alias_input, _this.animeYear_input, _this.animeIndex_input, _this.animeUpdateInfo_input, coverOSS_URL).then(function (response) {
                    if (response) {
                        console.log("修改动漫信息成功");
                    } else {
                        console.log("修改动漫信息失败");
                    }
                });
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