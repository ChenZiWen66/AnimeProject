import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from "../views/Main";
import AnimeView from "../views/AnimeView";
import AnimePlay from "../views/AnimePlay";
import AnimeListPRC from "../views/AnimeListPRC";
import ManagePage from "../views/ManagePage";
import AnimeInfoManagePage from "../views/AnimeInfoManagePage";
import UploadAnimePage from "../views/UploadAnimePage";
import ZoneManagePage from "../views/ZoneManagePage";
import TypeMangePage from "../views/TypeMangePage";
import TagMangePage from "../views/TagMangePage";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/manage',
        name: 'ManagePage',
        component: ManagePage,
        children: [
            {
                path: '/manage/AnimeInfoManagement',
                name: 'AnimeInfoManagePage',
                component: AnimeInfoManagePage
            },
            {
                path: '/manage/UploadAnime',
                name: 'UploadAnimePage',
                component: UploadAnimePage
            },{
                path: '/manage/ZoneManage',
                name: 'ZoneManagePage',
                component: ZoneManagePage
            },{
                path: '/manage/TypeManage',
                name: 'TypeManagePage',
                component: TypeMangePage
            },,{
                path: '/manage/TagManage',
                name: 'TagManagePage',
                component: TagMangePage
            },
        ]
    },
    {
        path: '/main',
        name: 'Main',
        component: Main
    },
    {
        path: '/view',
        name: 'AnimeView',
        component: AnimeView,

    },
    {
        path: '/player',
        name: 'Play',
        component: AnimePlay
    }, {
        path: '/List',
        name: 'List',
        component: AnimeListPRC
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
