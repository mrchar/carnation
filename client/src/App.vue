<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Menu from "./components/Menu.vue";
import Drawer from "./components/Drawer.vue";
const menus = [
  {title: "工作台", path: "/console" },
  {title:"消息", path: "/messages"},
  {title:"团队", path:"/teams"},
  {title: "项目", path:"/projects"}
]
</script>

<template>
  <div class="w-screen h-screen flex flex-col overflow-hidden">
    <Navbar class="flex-none"/>
    <div class="flex-1 w-full h-128 flex">
      <div class="flex-1 w-256 h-full flex flex-row overflow-hidden">
        <div class="aside">
          <Menu class="h-full" :menus="menus"/>
        </div>
        <div class="w-full h-full">
          <router-view/>
        </div>
      </div>
      <Drawer class="flex-none w-fit"/>
    </div>
  </div>
</template>

<style scoped>
@reference "./style.css";

.aside {
  @apply flex-none w-56 h-full ;
}

</style>
