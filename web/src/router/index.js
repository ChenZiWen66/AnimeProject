import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from "../views/userPage/Main";
import AnimeView from "../views/userPage/AnimeView";
import AnimePlay from "../views/userPage/AnimePlay";
import AnimeListPRC from "../views/userPage/AnimeListPRC";
import ManagePage from "../views/managePage/ManagePage";
import AnimeInfoManagePage from "../views/managePage/AnimeInfoManagePage";
import UploadAnimePage from "../views/managePage/UploadAnimePage";
import ZoneManagePage from "../views/managePage/ZoneManagePage";
import TypeMangePage from "../views/managePage/TypeMangePage";
import TagMangePage from "../views/managePage/TagMangePage";
import Test from "../views/Test";
import StatisticView from "../views/managePage/StatisticView";

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
            },{
                path: '/manage/TagManage',
                name: 'TagManagePage',
                component: TagMangePage
            },{
                path: '/manage/Statistics',
                name: 'StatisticsView',
                component: StatisticView
            },
        ]
    },
    {
        path: '/main',
        name: 'Main',
        component: Main
    },{
        path: '/test',
        name: 'Test',
        component: Test
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
