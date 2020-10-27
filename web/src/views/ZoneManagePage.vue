<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2" style="background-color: coral;height: 100vh"></div>
            <div class="col-md-5" style="background-color: aqua;height: 100vh">
                <label>
                    左边是部分是一个纵向表，里面有已经存放到数据库的地区信息
                    <select id="zone_info" multiple class="form-control zoneList">
                        <option v-for="i in zoneList.length" :value="i">
                            {{ zoneList[i-1].zone_name }}
                        </option>
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
                            <input id="addZone" type="text" class="form-control" placeholder="添加地区">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button" @click="click_btn_addZone">添加</button>
                            </span>
                        </div>
                    </div>
                    <div class="col-md-12 blockRow"></div>
                    <div class="col-md-12">
                        <div class="input-group">
                            <input id="updateZone" type="text" class="form-control" placeholder="修改地区">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button" @click="click_btn_updateZone">修改</button>
                            </span>
                        </div>
                    </div>
                    <div class="col-md-12 blockRow"></div>
                    <div class="col-md-12">
                        <button class="btn btn-default btn-block" type="button" @click="click_btn_deleteZone">删除
                        </button>
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
        name: "ZoneManagePage",
        data() {
            return {
                zoneList: [],//查询得到的地区信息列表
                success_alert_active: false,//警告框是否弹出
                danger_alert_active: false,
                success_alert_content: '成功信息',//警告框信息
                danger_alert_content: '危险信息'
            }
        },
        methods: {
            getZoneList() {
                let _this = this;
                this.$http.get("http://localhost:9001/showAnimeZone").then(function (response) {
                    _this.zoneList = response.data;
                })
            },
            click_btn_addZone() {
                let _this = this;
                let addZoneValue = document.querySelector("#addZone").value;
                if (addZoneValue !== '') {
                    let formData = new window.FormData();
                    formData.append('zone_name', addZoneValue);
                    try {
                        _this.$http.post("http://localhost:9001/insertAnimeZone", formData).then(function (response) {
                            _this.getZoneList();
                            _this.show_success_alert('添加地区信息成功');
                        });
                    } catch (e) {
                        _this.show_danger_alert('添加地区信息失败');
                    }
                } else {
                    _this.show_danger_alert('输入信息不能为空');
                }
            },
            click_btn_updateZone() {
                let _this = this;
                let formData = new window.FormData();
                let updateZoneValue;
                try {
                    _this.updateZoneValue = document.querySelector("#updateZone").value;
                    let option_index = document.querySelector("#zone_info").value - 1;//获取地区列表的序列号
                    let id = _this.zoneList[option_index].id;
                    let uuid = _this.zoneList[option_index].uuid;
                    let zone_name = _this.updateZoneValue;
                    formData.append('id', id);
                    formData.append('uuid', uuid);
                    formData.append('zone_name', zone_name);
                } catch (e) {
                    _this.show_danger_alert('请选择地区信息');
                    return;
                }
                if (_this.updateZoneValue !== '') {
                    try {
                        _this.$http.post("http://localhost:9001/updateAnimeZone", formData).then(function (response) {
                            _this.getZoneList();
                            _this.show_success_alert('修改地区信息成功');
                        });
                    } catch (e) {
                        _this.show_danger_alert('更新信息失败');
                    }
                } else {
                    _this.show_danger_alert('请输入修改后的信息');
                }
            },
            click_btn_deleteZone() {
                let _this = this;
                let formData = new window.FormData();
                try {
                    let option_index = document.querySelector("#zone_info").value - 1;//获取地区列表的序列号
                    let id = _this.zoneList[option_index].id;
                    formData.append('id', id);
                } catch (e) {
                    _this.show_danger_alert('请选择地区信息');
                    return;
                }

                try {
                    _this.$http.post("http://localhost:9001/deleteAnimeZone", formData).then(function (response) {
                        _this.show_success_alert('删除地区信息成功');
                        _this.getZoneList();
                    });
                } catch (e) {
                    _this.show_danger_alert('删除地区信息失败');
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
            //    获取地区列表
            this.getZoneList();
        }
    }
</script>

<style scoped>
    .zoneList {
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