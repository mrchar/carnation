<script setup lang="ts">
import Avatar from "../components/Avatar.vue";
import Tabs from "../components/Tabs.vue";
</script>
<template>
  <div class="w-ful h-full flex">
    <div class="w-full h-full flex flex-wrap gap-2 content-start p-2 overflow-auto">
      <Avatar v-for="_ in Array(100)"/>
    </div>
  </div>
</template>