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
                                        <input type="file" id="exampleInputFile">
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
                        <button type="button" class="btn btn-primary">确认修改</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
            }
        },
        props: {
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
            coverImgSrc:{
                type: String,
                default:""
            },//上传封面的路径，
        },
        mounted() {
            let _this = this;
            _this.getAttributeList();
        },
        methods: {
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