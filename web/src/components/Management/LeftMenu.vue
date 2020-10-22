<template>
    <div class="col-md-12 LeftMenu">
        <ul class="nav nav-default nav-stacked">
            <li role="presentation">
                <a href="#" class="dropdown-toggle" @click="profile_active = !profile_active">Profile</a>
                <transition name="sub-comments">
                    <ul class="submenu" v-show="profile_active">
                        <li>
                            <a href="#">
                                Simple &amp; Dynamic
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                jqGrid plugin
                            </a>
                        </li>
                    </ul>
                </transition>
            </li>
            <li role="presentation"><a href="#">Profile</a></li>
            <li role="presentation"><a href="#">Profile</a></li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "LeftMenu",
        data() {
            return {
                profile_active: false
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
        background-color: #19233c;
    }

    .LeftMenu li {
        list-style: none;
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

    .sub-comments-leave-active,.sub-comments-enter-active {
        transition: max-height 0.5s linear;
    }
    .sub-comments-enter,.sub-comments-leave-to {
        max-height:0 ;
        opacity: 0;
    }
    .sub-comments-enter-to,.sub-comments-leave {
        max-height: 136px ;
    }
</style>