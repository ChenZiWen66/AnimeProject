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
                                        <option value="*">不限地区</option>
                                        <option v-for="zone in zoneList" :value="zone.uuid">{{zone.zone_name}}</option>
                                    </select>
                                </label>
                                <label>
                                    <select class="form-control" name="selectType" v-model="selected_type">
                                        <option value="*">不限分类</option>
                                        <option v-for="type in typeList" :value="type.uuid">{{type.type_name}}</option>
                                    </select>
                                </label>
                                <label>
                                    <select class="form-control" name="selectTag" v-model="selected_tag">
                                        <option value="*">不限标签</option>
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
            <div v-for="n in 4">
                <div class="col-md-3">
                    <div class="thumbnail">
                        <img src="../../assets/xiaolan.jpg" alt="动漫封面">
                        <div class="caption">
                            <div>
                                <h4>《陈子文的一天》</h4>
                            </div>
                            <div>
                                <label>
                                    一共6集
                                    <select multiple class="form-control">
                                        <option @dblclick="doubleClickChapter">第1集</option>
                                        <option @dblclick="doubleClickChapter">第2集</option>
                                        <option @dblclick="doubleClickChapter">第3集</option>
                                        <option @dblclick="doubleClickChapter">第4集</option>
                                        <option @dblclick="doubleClickChapter">第5集</option>
                                        <option @dblclick="doubleClickChapter">OVA</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <div class="btn-group btn-group-xs" role="group">
                                    <!--点击后弹出上传剧集的模态框，可以上传剧集-->
                                    <button type="button" class="btn btn-default" @click="clickUploadChapter">上传剧集
                                    </button>
                                    <!--点击后删除该动漫，以及它所有的剧集-->
                                    <button type="button" class="btn btn-default" @click="clickDeleteAnimeInfo">删除动漫
                                    </button>
                                    <!--点击后弹出修改信息的模态框，可以修改信息-->
                                    <button type="button" class="btn btn-default" @click="clickUpdateAnimeInfo">修改信息
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
                selected_type: '*',//被选中的分类信息
                selected_zone: '*',//被选中的地区信息
                selected_tag: '*',//被选中的标签信息
                search_content: '',//搜索框的输入的内容
                typeList: [],//获取的分类信息
                zoneList: [],//获取的地区信息
                tagList: []//获取的标签信息
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
             * 点击了属性旁边的筛选按钮，开始根据属性查询
             */
            click_btn_SearchByAttribute() {
                let _this = this;
                console.log("选中的标签", _this.selected_tag);
                console.log("选中的地区", _this.selected_zone);
                console.log("选中的分类", _this.selected_type);
            },
            /**
             * 点击了搜索框旁边的筛选按钮，开始根据输入内容进行查询
             */
            click_btn_SearchByKeyword() {
                let _this = this;
                console.log("输入内容", _this.search_content);
            },
            doubleClickChapter() {
                console.log("双击了剧集Chapter，将更新剧集信息");
                $("#animeChapterUpdateModal").modal('show');
            },
            clickUploadChapter() {
                console.log("点击了上传剧集的按钮，将更新剧集信息");
                $("#animeChapterUploadModal").modal('show');
            },
            clickUpdateAnimeInfo() {
                console.log("点击了更新动漫信息的按钮，将更新动漫信息");
                $("#updateAnimeInfoModal").modal('show');
            },
            clickDeleteAnimeInfo() {
                console.log("点击了删除动漫的按钮，将删除动漫，以及它所有剧集");
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