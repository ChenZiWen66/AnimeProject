<template>
    <div class="contain-fluid">
        <div class="row">
            <div class="col-md-1" style="background-color: coral;height: 100vh"></div>
            <!--左半侧-->
            <div class="col-md-5" style="background-color: lightgoldenrodyellow;height: 100vh">
                <div class="form-group">
                    <label for="animeName" class="col-md-3 control-label">动漫名</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="animeName" v-model="animeName_input"
                               placeholder="请输入动漫名">
                    </div>
                </div>
                <div class="form-group">
                    <label for="alias" class="col-md-3 control-label">别名</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="alias" v-model="alias_input" placeholder="请输入别名">
                    </div>
                </div>
                <div class="form-group">
                    <label for="anime_describe" class="col-md-3 control-label">描述</label>
                    <div class="col-md-9">
                        <textarea class="form-control" id="anime_describe" v-model="anime_describe_input"
                                  placeholder="描述" rows="6"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="animeYear" class="col-md-3 control-label">年代</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="animeYear" v-model="animeYear_input"
                               placeholder="年代">
                    </div>
                </div>
                <div class="form-group">
                    <label for="animeIndex" class="col-md-3 control-label">索引</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="animeIndex" v-model="animeIndex_input"
                               placeholder="索引">
                    </div>
                </div>
                <div class="form-group">
                    <label for="animeUpdateInfo" class="col-md-3 control-label">更新信息</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="animeUpdateInfo" v-model="animeUpdateInfo_input"
                               placeholder="更新信息">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputCoverImg" class="col-md-3 control-label">封面路径</label>
                    <div class="col-md-9">
                        <input type="file" id="inputCoverImg" @change="change_CoverImgInput()"
                               accept="image/jpg,image/jpeg,image/png,image/PNG">
                        <p class="help-block">点击按钮上传图片</p>
                    </div>
                </div>
            </div>
            <!--右半侧-->
            <div class="col-md-5" style="background-color: lightgoldenrodyellow;height: 100vh">
                <div class="form-group col-md-12">
                    <label class="col-md-3 control-label">类型</label>
                    <div class="col-md-9 checkboxBorder">
                        <label class="checkbox-inline" v-for="type in typeList">
                            <input type="checkbox" name="typeCheckbox" :value="type.uuid" v-model="type_input">
                            {{type.type_name}}
                        </label>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <label class="col-md-3 control-label">地区</label>
                    <div class="col-md-9 checkboxBorder">
                        <label class="checkbox-inline" v-for="zone in zoneList">
                            <input type="checkbox" name="zoneCheckbox" :value="zone.uuid" v-model="zone_input">
                            {{zone.zone_name}}
                        </label>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <label class="col-md-3 control-label">标签</label>
                    <div class="col-md-9 checkboxBorder">
                        <label class="checkbox-inline" v-for="tag in tagList">
                            <input type="checkbox" name="tagCheckbox" :value="tag.uuid" v-model="tag_input">
                            {{tag.tag_name}}
                        </label>
                    </div>
                </div>
                <div class="col-md-12">
                    <img id="coverImgPreview" :src="coverImgSrc" alt="选择的图片" class="img-thumbnail coverImg">
                </div>
                <div class="col-md-12">
                    <button class="btn btn-default btn-block" type="button" @click="click_btn_upload">上传动漫</button>
                </div>
            </div>
            <div class="col-md-1" style="background-color: coral;height: 100vh"></div>
        </div>
        <transition name="fade">
            <div v-show="danger_alert_active" class="alert alert-danger" role="alert">
                <strong>{{danger_alert_content}}</strong>
            </div>
        </transition>
        <transition name="fade">
            <div v-show="success_alert_active" class="alert alert-success" role="alert">
                <strong>{{success_alert_content}}</strong>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "UploadAnimePage",
        data() {
            return {
                success_alert_active: false,//警告框是否弹出
                danger_alert_active: false,
                success_alert_content: '成功信息',//警告框信息
                danger_alert_content: '危险信息',
                is_selectCover: false,//是否选择了封面
                zoneList: [],//地区信息
                typeList: [],//分类信息
                tagList: [],//标签信息
                coverImgSrc: "https://czwhub.oss-cn-shanghai.aliyuncs.com/xiaolan.jpg",//上传封面的路径，
                animeName_input: '',//输入的动漫名称
                alias_input: '',//输入的别名
                anime_describe_input: '',//输入的动漫描述
                animeYear_input: '',//输入的年份
                animeIndex_input: '',//输入的索引
                animeUpdateInfo_input: '',//输入的更新信息
                type_input: [],//选择的分类
                zone_input: [],//选择的地区
                tag_input: [],//选择的标签

            }
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

            /**
             * 输入图片改变,显示预览
             */
            change_CoverImgInput() {
                let _this = this;
                _this.is_selectCover = true;
                //根据ref得到图片文件
                let file = document.querySelector("#inputCoverImg").files[0];
                //使用h5的读取文件api
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    _this.coverImgSrc = this.result;
                }
            },
            /**
             * 点击上传按钮,触发上传事件
             */
            async click_btn_upload() {
                let _this = this;
                let animeUUID;
                if (!_this.is_selectCover) {
                    _this.show_danger_alert("请上传动漫封面！");
                }
                //获取用户输入的信息
                if (!(_this.empty_warning(_this.animeName_input, "动漫名") &&
                    _this.empty_warning(_this.alias_input, "别名") &&
                    _this.empty_warning(_this.anime_describe_input, "描述") &&
                    _this.empty_warning(_this.animeYear_input, "年份") &&
                    _this.empty_warning(_this.animeIndex_input, "索引") &&
                    _this.empty_warning(_this.animeUpdateInfo_input, "更新信息") &&
                    _this.empty_warning(_this.type_input.toString(), "类型") &&
                    _this.empty_warning(_this.zone_input.toString(), "地区") &&
                    _this.empty_warning(_this.tag_input.toString(), "标签") &&
                    (!_this.is_selectCover))
                ) {
                    //生成一个随机的UUID作为动漫的UUID,uuid1是根据机器码时间等生成的，而uuid4是根据自己设置的变量生成的，尽量使用uuid1
                    _this.animeUUID = this.$uuid.v1();
                    //获取文件后缀名
                    let cover_file = document.querySelector("#inputCoverImg").files[0];
                    let file_name = cover_file.name;//文件名
                    let cover_type = file_name.substring(file_name.lastIndexOf("."));//后缀
                    //上传图片至 /动漫UUID/cover.jpg
                    let coverOSS_URL = await _this.upLoadFile2OSS(cover_file, _this.animeUUID + '/cover' + cover_type);

                    console.log("成功上传文件coverOSS：", coverOSS_URL);
                    //上传动漫信息
                    let formData = new window.FormData();
                    formData.append("anime_name", _this.animeName_input);
                    formData.append("anime_uuid", _this.animeUUID);
                    formData.append("anime_type", _this.type_input.toString());
                    formData.append("anime_describe", _this.anime_describe_input);
                    formData.append("alias", _this.alias_input);
                    formData.append("anime_zone", _this.zone_input.toString());
                    formData.append("anime_year", _this.animeYear_input);
                    formData.append("anime_tag", _this.tag_input.toString());
                    formData.append("indexes", _this.animeIndex_input);
                    formData.append("update_info", _this.animeUpdateInfo_input);
                    formData.append("coverimg_src", coverOSS_URL);
                    try {
                        _this.$http.post("http://localhost:9001/insertAnimeInfo", formData).then(function () {
                            _this.show_success_alert("添加动漫成功！");
                        })
                    } catch (e) {
                        _this.show_danger_alert("添加动漫失败！");
                    }

                }
            },
            async upLoadFile2OSS(file, oss_src) {
                let _this = this;
                let src;
                let formData = new window.FormData();
                formData.append("file", file);
                formData.append("src", oss_src);
                await _this.$http.post("http://localhost:9002/uploadFile2OSS", formData).then(function (response) {
                    src = response.data.fileUrl_OSS;
                });
                return src;
            },
            empty_warning(input_name, input_label) {
                let _this = this;
                if (input_name === '') {
                    _this.show_danger_alert(input_label + "不能为空")
                }
                return true;
            }
            ,
            show_success_alert(success_alert_content) {
                let _this = this;
                this.success_alert_content = success_alert_content;
                _this.success_alert_active = true;
                setTimeout(function () {
                    _this.success_alert_active = false
                }, 1500);
            },
            show_danger_alert(danger_alert_content) {
                let _this = this;
                this.danger_alert_content = danger_alert_content;
                _this.danger_alert_active = true;
                setTimeout(function () {
                    _this.danger_alert_active = false
                }, 1500);

            }
        }
    }
</script>

<style scoped>
    label {
        margin-top: 11px;
    }

    .checkbox-inline {
        margin-top: 0;
        margin-left: 10px;
    }

    input {
        margin-top: 5px;
    }

    textarea {
        margin-top: 5px;
    }

    .checkboxBorder {
        border: 0 solid gray;
        border-bottom-width: 1px;
    }

    .coverImg {
        height: 200px;
    }

    .alert {
        position: absolute;
        width: 300px;
        height: 50px;
        left: 300px;
        top: 50px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */
    {
        opacity: 0
    }
</style>