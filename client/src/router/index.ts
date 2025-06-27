import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes";
import {useUserStore} from "../store/user.ts";

const needNotAuthentication = ["Login"]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to, from) => {
    const store = useUserStore()
    const authenticated = !!store.user.id.length
    if (!needNotAuthentication.includes(to.name) && !authenticated) {
        return {name: "Login", query: {referer: to.path}}
    }
})

export default router;
