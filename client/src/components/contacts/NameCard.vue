<script setup lang="ts">
import type {User} from "../chatbox/types.ts";
import ListItem from "../list/ListItem.vue";
import Avatar from "../Avatar.vue";

export type Props = User

const props = defineProps<Props>();
</script>

<template>
  <ListItem class="cursor-pointer">
    <Avatar class="size-10" :src="props.avatar" />
    <div>
      <div>{{props.name}}</div>
      <div class="text-xs font-semibold opacity-60">
        {{ props.id}}
      </div>
    </div>
  </ListItem>
</template>