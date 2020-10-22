<template>
    <div class="col-md-12 LeftMenu">
        <ul class="nav nav-default nav-stacked">
            <li role="presentation"><a href="#">总览</a></li>
            <li role="presentation">
                <a href="#" class="dropdown-toggle" @click="animeManageActive = !animeManageActive">动漫管理</a>
                <transition name="sub-comments">
                    <ul class="submenu" v-show="animeManageActive">
                        <li>
                            <a href="#" @click="$router.push('/manage/AnimeInfoManagement')">
                                动漫信息管理
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="$router.push('/manage/UploadAnime')">
                                上传动漫
                            </a>
                        </li>
                    </ul>
                </transition>
            </li>
            <li role="presentation"><a href="#">用户管理</a></li>
            <li role="presentation">
                <a href="#" class="dropdown-toggle" @click="tagManageActive = !tagManageActive">标签管理</a>
                <transition name="sub-comments">
                    <ul class="submenu" v-show="tagManageActive">
                        <li>
                            <a href="#" @click="$router.push('/manage/ZoneManage')">
                                地区设置
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="$router.push('/manage/TypeManage')">
                                分类设置
                            </a>
                        </li>
                    </ul>
                </transition>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "LeftMenu",
        data() {
            return {
                animeManageActive: false,
                tagManageActive: false
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .LeftMenu {
        padding: 0 0;
    }

    .LeftMenu a {
        color: white;
        background-color: #19233c;
    }

    .LeftMenu li {
        list-style: none;
        font-size: 14px;
    }

    .LeftMenu ul {
        padding: 0;
    }

    .LeftMenu .submenu {
        background-color: #121A2C;

    }

    .submenu li {
        width: 200px;
        height: 50px;
        padding-top: 16px;
    }

    .submenu a {
        background-color: #121A2C;
    }

    .nav > li > a:hover {
        background-color: #121A2C;
    }

    .nav > li > a:focus {
        background-color: #19233c;
    }

    a:hover, a:focus {
        color: #309cff;
    }


    .sub-comments-leave-active, .sub-comments-enter-active {
        transition: max-height 0.5s linear;
    }

    .sub-comments-enter, .sub-comments-leave-to {
        max-height: 0;
        opacity: 0;
    }

    .sub-comments-enter-to, .sub-comments-leave {
        max-height: 136px;
    }
</style>