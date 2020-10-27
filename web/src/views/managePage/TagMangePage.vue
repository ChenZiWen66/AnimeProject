<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2" style="background-color: coral;height: 100vh"></div>
            <div class="col-md-5" style="background-color: aqua;height: 100vh">
                <label>
                    左边的部分是一个纵向表，里面有已经存放到数据库的标签信息
                    <select id="tag_info" multiple class="form-control typeList">
                        <option v-for="i in tagList.length" :value="i">{{ tagList[i-1].tag_name }}</option>
                    </select>
                </label>
            </div>
            <div class="col-md-3" style="background-color: wheat;height: 100vh">
                右边是一些操作，添加操作（一个值的框和一个按钮，向数据库插入一个标签）,
                修改操作（一个值的框和一个按钮，点击纵向表里面的信息，在框里输入值，点击按钮修改）,
                删除操作（点击纵向表中的值，点击按钮删除）
                <div class="row">
                    <div class="col-md-12">
                        <div class="input-group">
                            <input id='addTag' type="text" class="form-control" placeholder="添加标签">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button" @click="click_btn_addTag">添加</button>
                            </span>
                        </div>
                    </div>
                    <div class="col-md-12 blockRow"></div>
                    <div class="col-md-12">
                        <div class="input-group">
                            <input id='updateTag' type="text" class="form-control" placeholder="修改标签">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button" @click="click_btn_updateTag">修改</button>
                            </span>
                        </div>
                    </div>
                    <div class="col-md-12 blockRow"></div>
                    <div class="col-md-12">
                        <button class="btn btn-default btn-block" type="button" @click="click_btn_deleteTag">删除</button>
                    </div>
                </div>
            </div>
            <div class="col-md-2" style="background-color: coral;height: 100vh"></div>
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
        name: "TypeMangePage",
        data() {
            return {
                tagList: [],//查询得到的标签信息列表
                success_alert_active: false,//警告框是否弹出
                danger_alert_active: false,
                success_alert_content: '成功信息',//警告框信息
                danger_alert_content: '危险信息'
            }
        },
        methods: {
            getTagList() {
                let _this = this;
                this.$http.get("http://localhost:9001/showAnimeTag").then(function (response) {
                    _this.tagList = response.data;
                })
            },
            click_btn_addTag() {
                let _this = this;
                let addTagValue = document.querySelector("#addTag").value;
                if (addTagValue !== '') {
                    let formData = new window.FormData();
                    formData.append('tag_name', addTagValue);
                    try {
                        _this.$http.post("http://localhost:9001/insertAnimeTag", formData).then(function (response) {
                            _this.getTagList();
                            _this.show_success_alert('添加标签信息成功');
                        });
                    } catch (e) {
                        _this.show_danger_alert('添加标签信息失败');
                    }
                } else {
                    _this.show_danger_alert('输入信息不能为空');
                }
            },
            click_btn_updateTag() {
                let _this = this;
                let formData = new window.FormData();
                let updateTagValue;
                try {
                    _this.updateTagValue = document.querySelector("#updateTag").value;
                    let option_index = document.querySelector("#tag_info").value - 1;//获取标签列表的序列号
                    let id = _this.tagList[option_index].id;
                    let uuid = _this.tagList[option_index].uuid;
                    let tag_name = _this.updateTagValue;
                    formData.append('id', id);
                    formData.append('uuid', uuid);
                    formData.append('tag_name', tag_name);
                } catch (e) {
                    _this.show_danger_alert('请选择标签信息');
                    return;
                }
                if (_this.updateTagValue !== '') {
                    try {
                        _this.$http.post("http://localhost:9001/updateAnimeTag", formData).then(function (response) {
                            _this.getTagList();
                            _this.show_success_alert('修改标签信息成功');
                        });
                    } catch (e) {
                        _this.show_danger_alert('更新信息失败');
                    }
                } else {
                    _this.show_danger_alert('请输入修改后的信息');
                }
            },
            click_btn_deleteTag() {
                let _this = this;
                let formData = new window.FormData();
                try {
                    let option_index = document.querySelector("#tag_info").value - 1;//获取标签列表的序列号
                    let id = _this.tagList[option_index].id;
                    formData.append('id', id);
                } catch (e) {
                    _this.show_danger_alert('请选择标签信息');
                    return;
                }

                try {
                    _this.$http.post("http://localhost:9001/deleteAnimeTag", formData).then(function (response) {
                        _this.show_success_alert('删除标签信息成功');
                        _this.getTagList();
                    });
                } catch (e) {
                    _this.show_danger_alert('删除标签信息失败');
                }

            },
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
        },
        mounted() {
            //    获取标签列表
            this.getTagList();
        }
    }
</script>

<style scoped>
    .typeList {
        height: 530px;
        padding: 0;
    }

    option {
        height: 40px;
        font-size: 20px;
        padding: 10px;
    }

    option:hover {
        background-color: cornsilk;
    }

    .blockRow {
        height: 30px;
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