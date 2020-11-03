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
                                    <select class="form-control" name="selectZone" v-model="selected_zone">
                                        <option value="">不限地区</option>
                                        <option v-for="zone in zoneList" :value="zone.uuid">{{zone.zone_name}}</option>
                                    </select>
                                </label>
                                <label>
                                    <select class="form-control" name="selectType" v-model="selected_type">
                                        <option value="">不限分类</option>
                                        <option v-for="type in typeList" :value="type.uuid">{{type.type_name}}</option>
                                    </select>
                                </label>
                                <label>
                                    <select class="form-control" name="selectTag" v-model="selected_tag">
                                        <option value="">不限标签</option>
                                        <option v-for="tag in tagList" :value="tag.uuid">{{tag.tag_name}}</option>
                                    </select>
                                </label>
                                <button type="button" class="btn btn-default" @click="click_btn_SearchByAttribute">搜索
                                </button>
                            </div>
                        </form>
                        <form class="navbar-form navbar-right">
                            <div class="form-group">
                                <label>
                                    <input type="text" class="form-control" placeholder="Search"
                                           v-model="search_content">
                                </label>
                            </div>
                            <button type="submit" class="btn btn-default" @click="click_btn_SearchByKeyword">关键词搜索
                            </button>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
        <!--中间的是信息栏-->
        <div class="row midContent">
            <div v-for="i in animeInfoList.length">
                <div class="col-md-3">
                    <div class="thumbnail">
                        <img :src="animeInfoList[i-1].coverimg_src" alt="动漫封面">
                        <div class="caption">
                            <div>
                                <h4>《{{animeInfoList[i-1].anime_name}}》</h4>
                            </div>
                            <div>
                                <label>
                                    一共10集
                                    <select multiple class="form-control">
                                        <option @dblclick="doubleClickChapter"
                                                v-for="chapterInfo in chapterInfoList[i-1]">
                                            {{ chapterInfo.chapter_name }}
                                        </option>
                                        <option @dblclick="doubleClickChapter">
                                            aaaaaa
                                        </option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <div class="btn-group btn-group-xs" role="group">
                                    <!--点击后弹出上传剧集的模态框，可以上传剧集-->
                                    <button type="button" class="btn btn-default" @click="clickUploadChapter(i-1)">上传剧集
                                    </button>
                                    <!--点击后删除该动漫，以及它所有的剧集-->
                                    <button type="button" class="btn btn-default" @click="clickDeleteAnimeInfo(i-1)">
                                        删除动漫
                                    </button>
                                    <!--点击后弹出修改信息的模态框，可以修改信息-->
                                    <button type="button" class="btn btn-default" @click="clickUpdateAnimeInfo(i-1)">
                                        修改信息
                                    </button>
                                </div>
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
        <AnimeChapterUpdateModel/>
        <AnimeChapterUploadModel/>
        <UpdateAnimeInfoModel/>
    </div>
</template>

<script>
    import AnimeManagementPagination from "../../components/Management/AnimeManagementPagination";
    import AnimeChapterUpdateModel from "../../components/Management/AnimeChapterUpdateModal";
    import AnimeChapterUploadModel from "../../components/Management/AnimeChapterUploadModal";
    import UpdateAnimeInfoModel from "../../components/Management/UpdateAnimeInfoModal";
    import {globalBus} from "../../components/GlobalBus";

    export default {
        name: "AnimeInfoManagePage",
        components: {
            UpdateAnimeInfoModel,
            AnimeChapterUploadModel,
            AnimeChapterUpdateModel,
            AnimeManagementPagination
        },
        data() {
            return {
                animeInfoList: [],//获取的动漫信息
                selected_type: '',//被选中的分类信息
                selected_zone: '',//被选中的地区信息
                selected_tag: '',//被选中的标签信息
                search_content: '',//搜索框的输入的内容
                typeList: [],//获取的分类信息
                zoneList: [],//获取的地区信息
                tagList: [],//获取的标签信息
                current_page: 1,//当前页面数
                max_page: 1,//最大页面数
                page_capacity: 4,//页面大小
                searchMethod_is_Attribute: true,//查询方式是否为通过属性搜索


                //单个剧集的信息
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

                //剧集信息
                chapterInfoList: new Array(4),
            }
        },
        mounted() {
            let _this = this;
            _this.getAttributeList();
            _this.getAnimeInfo_maxPage_ByAttribute();
            globalBus.$on("PaginationCurrentPage", function (callback) {
                _this.current_page = callback;
            });
            _this.getAnimeInfoListByAttribute();
        },
        watch: {
            current_page() {
                let _this = this;
                if (_this.searchMethod_is_Attribute) {
                    _this.getAnimeInfoListByAttribute();
                } else {
                    _this.getAnimeInfoListByKeyword();
                }
            }
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
             * 通过属性查询动漫信息的数量并设置最大页面数
             */
            getAnimeInfo_maxPage_ByAttribute() {
                let _this = this;
                let formData = new window.FormData();
                formData.append("anime_type", _this.selected_type);
                formData.append("anime_tag", _this.selected_tag);
                formData.append("anime_zone", _this.selected_zone);
                this.$http.post("http://localhost:9001/getAnimeInfoCountByAttribute", formData).then(function (response) {
                    _this.max_page = Math.ceil(response.data.animeInfoCount / _this.page_capacity);
                    globalBus.$emit('PaginationMaxPage', _this.max_page);
                })
            },
            /**
             * 通过属性查询动漫信息
             */
            getAnimeInfoListByAttribute() {
                console.log("开始查询信息");
                let _this = this;
                let formData = new window.FormData();
                formData.append("anime_type", _this.selected_type);
                formData.append("anime_tag", _this.selected_tag);
                formData.append("anime_zone", _this.selected_zone);
                formData.append("current_page", _this.current_page);
                formData.append("page_capacity", _this.page_capacity);
                this.$http.post("http://localhost:9001/selectAnimeInfoByAttribute", formData).then(function (response) {
                    _this.animeInfoList = response.data;
                    for (let i = 0; i < _this.animeInfoList.length; i++) {
                        _this.getChapterInfoList(_this.animeInfoList[i].uuid,i);
                    }
                    console.log("动漫信息", _this.animeInfoList);
                    console.log("章节信息:", _this.chapterInfoList);
                });
                _this.searchMethod_is_Attribute = true;
            },

            /**
             *通过动漫的UUID查询动漫剧集信息
             *
             */
            getChapterInfoList(animeUUID,index) {
                let formData = new FormData();
                let _this = this;
                formData.append("parentUUID", animeUUID);
                this.$http.post("http://localhost:9001/selectChapterInfoByParent", formData).then(function (response) {
                    console.log(animeUUID, ":", response.data);
                    _this.$set(_this.chapterInfoList, index, response.data);
                    console.log("插了一个章节信息,index=",index);
                });
            },
            /**
             * 通过搜索内容查询动漫信息的数量并设置最大页面数
             */
            getAnimeInfo_maxPage_ByKeyword() {
                let _this = this;
                let formData = new window.FormData();
                formData.append("searchContent", _this.search_content);
                this.$http.post("http://localhost:9001/getAnimeInfoCountByName", formData).then(function (response) {
                    _this.max_page = Math.ceil(response.data.animeInfoCount / _this.page_capacity);
                    globalBus.$emit('PaginationMaxPage', _this.max_page);
                })
            },
            /**
             * 通过搜索内容查询动漫信息
             */
            getAnimeInfoListByKeyword() {
                let _this = this;
                let formData = new window.FormData();
                formData.append("searchContent", _this.search_content);
                formData.append("current_page", _this.current_page);
                formData.append("page_capacity", _this.page_capacity);
                this.$http.post("http://localhost:9001/selectAnimeInfoByName", formData).then(function (response) {
                    _this.animeInfoList = response.data;
                });
                _this.searchMethod_is_Attribute = false;
            },
            /**
             * 点击了属性旁边的筛选按钮，开始根据属性查询
             */
            click_btn_SearchByAttribute() {
                let _this = this;
                _this.current_page = 1;
                globalBus.$emit('setCurrentPage', _this.current_page);
                _this.getAnimeInfo_maxPage_ByAttribute();
                _this.getAnimeInfoListByAttribute();
            },
            /**
             * 点击了搜索框旁边的筛选按钮，开始根据输入内容进行查询
             */
            click_btn_SearchByKeyword() {
                let _this = this;
                _this.current_page = 1;
                globalBus.$emit('setCurrentPage', _this.current_page);
                _this.getAnimeInfo_maxPage_ByKeyword();
                _this.getAnimeInfoListByKeyword();
            },
            doubleClickChapter() {
                console.log("双击了剧集Chapter，将更新剧集信息");
                $("#animeChapterUpdateModal").modal('show');
            },
            clickUploadChapter(i) {
                console.log("点击了上传剧集的按钮，将更新剧集信息");
                let _this = this;
                $("#animeChapterUploadModal").modal('show');
                let anime_info = {
                    anime_id: _this.animeInfoList[i].id,
                    anime_uuid: _this.animeInfoList[i].uuid,
                    anime_name: _this.animeInfoList[i].anime_name,//输入的动漫名称
                };
                let anime_info_Json = JSON.stringify(anime_info);
                globalBus.$emit("send_anime_info2ChapterManage", anime_info_Json);
            },
            /**
             * 点击了更新动漫信息的按钮，将更新动漫信息
             * i:列表的第几个
             */
            clickUpdateAnimeInfo(i) {
                $("#updateAnimeInfoModal").modal('show');
                let _this = this;
                //将动漫信息打包成json，然后传递给模态框
                let anime_info = {
                    anime_id: _this.animeInfoList[i].id,
                    anime_uuid: _this.animeInfoList[i].uuid,
                    animeName_input: _this.animeInfoList[i].anime_name,//输入的动漫名称
                    alias_input: _this.animeInfoList[i].alias,//输入的别名
                    anime_describe_input: _this.animeInfoList[i].anime_describe,//输入的动漫描述
                    animeYear_input: _this.animeInfoList[i].anime_year,//输入的年份
                    animeIndex_input: _this.animeInfoList[i].indexes,//输入的索引
                    animeUpdateInfo_input: _this.animeInfoList[i].update_info,//输入的更新信息
                    type_input: _this.animeInfoList[i].anime_type.split(','),//选择的分类
                    zone_input: _this.animeInfoList[i].anime_zone.split(','),//选择的地区
                    tag_input: _this.animeInfoList[i].anime_tag.split(','),//选择的标签
                    coverImgSrc: _this.animeInfoList[i].coverimg_src//封面路径
                };
                let anime_info_Json = JSON.stringify(anime_info);
                console.log(anime_info_Json);
                globalBus.$emit("anime_info_Json", anime_info_Json);
            },
            clickDeleteAnimeInfo(i) {
                console.log("点击了删除动漫的按钮，将删除动漫，以及它所有剧集");
                let _this = this;
                let formData = new window.FormData();
                formData.append("id", _this.animeInfoList[i].id);
                try {
                    _this.$http.post("http://localhost:9001/deleteAnimeInfo", formData).then(function (response) {
                        console.log("删除动漫成功");
                    })
                } catch (e) {
                    console.log("删除动漫失败");
                }

            }
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

    .thumbnail {
        background-color: cornsilk;
    }
</style>