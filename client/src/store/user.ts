import {defineStore} from "pinia";
import type {User} from "../components/chatbox/types.ts";
import {useStorage} from "@vueuse/core";

const defaultUser = {id: "", name: "", avatar: ""}

export const useUserStore = defineStore("user", () => {
    const user: Ref<User> = useStorage("user", defaultUser)

    function setUser(value: User) {
        user.value = value;
    }

    return {
        user,
        setUser,
    }
})