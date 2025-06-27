<script setup lang="ts">
import {useRouter} from "vue-router";
import ThemeController from "./ThemeController.vue";
import Avatar from "./Avatar.vue";
import {useUserStore} from "../store/user.ts";

const store = useUserStore()

const user = store.user

const router = useRouter()

function logout() {
  store.setUser({id: "", name: "", avatar: ""})
  router.push("/login")
}
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">
        Carnation
      </a>
    </div>
    <div class="flex gap-2">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto"/>
      <div class="dropdown dropdown-end">
        <Avatar tabindex="0" role="button" :src="user.avatar" class="w-10"/>
        <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a @click="logout">Logout</a></li>
        </ul>
      </div>
      <ThemeController class="self-center"/>
    </div>
  </div>
</template>
