import type {RouteRecordRaw} from "vue-router"
import {createRouter, createWebHistory} from "vue-router";


const routes: RouteRecordRaw[] = [
    {name: "Root", path: "/", redirect: "/console"},
    {
        name: "Console",
        path: "/console",
        component: () => import("../views/Console.vue")
    },
    {
        name: "Messages",
        path: "/messages",
        component: () => import("../views/Messages.vue")
    },
    {
        name: "Teams",
        path: "/teams",
        component: () => import("../views/Teams.vue")
    },
    {
        name: "Projects",
        path: "/projects",
        component: () => import("../views/Projects.vue")
    }
];

export default createRouter({
    history: createWebHistory(),
    routes: routes,
});
