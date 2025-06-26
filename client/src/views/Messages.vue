<script setup lang="ts">
import List from "../components/List.vue";
import Room from "../components/Room.vue";
import Textarea from "../components/Textarea.vue";
import Button from "../components/Button.vue";
</script>

<template>
  <div class="flex w-full h-full">
    <div class="min-w-max h-full bg-gray-900 rounded-lg overflow-auto">
      <List/>
    </div>
    <div class="p-2 flex flex-col justify-between w-64 h-full flex-1">
      <Room/>
      <div class="flex w-full gap-2">
        <Textarea class="flex-1"/>
        <Button class="flex-none h-full"/>
      </div>
    </div>
  </div>
</template>
