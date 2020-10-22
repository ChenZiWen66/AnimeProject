<template>
    <div class="col-md-12 LeftMenu">
        <ul class="nav nav-default nav-stacked">
            <li role="presentation"><a href="#">总览</a></li>
            <li role="presentation">
                <a href="#" class="dropdown-toggle" @click="mubiaobiaozhun = !mubiaobiaozhun">目标标准</a>
                <transition name="sub-comments">
                    <ul class="submenu" v-show="mubiaobiaozhun">
                        <li>
                            <a href="#">
                                规划管理
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                指标库
                            </a>
                        </li>
                    </ul>
                </transition>
            </li>
            <li role="presentation"><a href="#">流程管理</a></li>
            <li role="presentation">
                <a href="#" class="dropdown-toggle" @click="mubiaokaohe = !mubiaokaohe">目标考核管理</a>
                <transition name="sub-comments">
                    <ul class="submenu" v-show="mubiaokaohe">
                        <li>
                            <a href="#">
                                考核基础设置
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                考核体系与规划管理
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                目标考核
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                目标考核总览
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                服务基层测评
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
                mubiaobiaozhun: false,
                mubiaokaohe: false
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