<script setup lang="ts">
export type Props = { menus: { title: string, path: string }[] }
const props = withDefaults(defineProps<Props>(), {menus: []})
</script>
<template>
  <ul class="menu bg-base-200 rounded-box w-56">
    <li v-for="item in props.menus" :key="item.title">
      <router-link :to="item.path">
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>