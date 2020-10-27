<template>
    <div class="contain-fluid">
        <div class="row">
            <div class="col-md-1" style="background-color: coral;height: 100vh"></div>
            <!--左半侧-->
            <div class="col-md-5" style="background-color: lightgoldenrodyellow;height: 100vh">
                <div class="form-group">
                    <label for="animeName" class="col-md-3 control-label">动漫名</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="animeName" placeholder="请输入动漫名">
                    </div>
                </div>
                <div class="form-group">
                    <label for="alias" class="col-md-3 control-label">别名</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="alias" placeholder="请输入别名">
                    </div>
                </div>
                <div class="form-group">
                    <label for="anime_describe" class="col-md-3 control-label">描述</label>
                    <div class="col-md-9">
                        <textarea class="form-control" id="anime_describe" placeholder="描述" rows="6"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="animeYear" class="col-md-3 control-label">年代</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="animeYear" placeholder="年代">
                    </div>
                </div>
                <div class="form-group">
                    <label for="animeIndex" class="col-md-3 control-label">索引</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="animeIndex" placeholder="索引">
                    </div>
                </div>
                <div class="form-group">
                    <label for="animeUpdateInfo" class="col-md-3 control-label">更新信息</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="animeUpdateInfo" placeholder="更新信息">
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputFile" class="col-md-3 control-label">封面路径</label>
                    <div class="col-md-9">
                        <input type="file" id="exampleInputFile">
                        <p class="help-block">点击按钮上传图片</p>
                    </div>
                </div>
            </div>
            <!--右半侧-->
            <div class="col-md-5" style="background-color: lightgoldenrodyellow;height: 100vh">
                <div class="form-group col-md-12">
                    <label class="col-md-3 control-label">类型</label>
                    <div class="col-md-9 checkboxBorder">
                        <label  class="checkbox-inline" v-for="type in typeList">
                            <input type="checkbox" id="inlineCheckbox1" :value="type.uuid"> {{type.type_name}}
                        </label>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <label class="col-md-3 control-label">地区</label>
                    <div class="col-md-9 checkboxBorder">
                        <label class="checkbox-inline" v-for="zone in zoneList">
                            <input type="checkbox" id="inlineCheckbox11" :value="zone.uuid"> {{zone.zone_name}}
                        </label>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <label class="col-md-3 control-label">标签</label>
                    <div class="col-md-9 checkboxBorder">
                        <label class="checkbox-inline" v-for="tag in tagList">
                            <input type="checkbox" id="inlineCheckbox21" :value="tag.uuid"> {{tag.tag_name}}
                        </label>
                    </div>
                </div>
                <div class="col-md-12">
                    <img src="../../assets/xiaolan.jpg" alt="选择的图片" class="img-thumbnail coverImg">
                </div>
                <div class="col-md-12">
                    <button class="btn btn-default btn-block" type="button">上传动漫</button>
                </div>
            </div>
            <div class="col-md-1" style="background-color: coral;height: 100vh"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UploadAnimePage",
        data() {
            return {
                zoneList: [],//地区信息
                typeList: [],//分类信息
                tagList: []//标签信息
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
            }
        }
    }
</script>

<style scoped>
    label {
        margin-top: 11px;
    }

    .checkbox-inline{
        margin-top: 0 ;
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
</style>