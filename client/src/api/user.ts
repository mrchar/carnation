import {unref} from "vue";
import type {MaybeRefOrGetter} from "@vueuse/core";
import type {User} from "../components/chatbox/types.ts";
import useApi from "./client.ts";

export function useListUsers() {
    return useApi("/users").get().json<User[]>()
}

export function useGetUser(params: MaybeRefOrGetter<{ id: string }>) {
    return useApi("/users/" + unref(params).id).get().json();
}

export function useAddUser(params: MaybeRefOrGetter<User>) {
    return useApi("/users").post(params).json()
}

export default {
    useListUsers,
    useGetUser,
    useAddUser
}