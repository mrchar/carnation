import type {RouteRecordRaw} from "vue-router"
import Framework from "../layouts/Framework.vue";

const routes: RouteRecordRaw[] = [
    {name: "Root", path: "/", redirect: "/console"},
    {
        name: "Login",
        path: "/login",
        component: () => import("../views/Login.vue")
    },
    {
        name: "Framework",
        path: "/",
        component: Framework,
        children: [
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
        ]
    }
];

export default routes;