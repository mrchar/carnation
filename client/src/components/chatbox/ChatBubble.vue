<script setup lang="ts">
import {DateTime} from "luxon";
import type {Message} from "./types";
import Avatar from "../Avatar.vue";

export type Props = Message & {
  incoming: boolean
  sender: {
    name: string
    avatar: string
  }
}

const props = defineProps<Props>()

</script>

<template>
  <div class="chat"
       :class="props.incoming ? 'chat-start' : 'chat-end'"
  >
    <Avatar class="chat-image w-10" :src="props.sender.avatar"/>
    <div class="chat-header">
      {{ props.sender.name }}
      <time class="text-xs opacity-50">
        {{ props.sendTime?.toLocaleString(DateTime.TIME_WITH_SECONDS) }}
      </time>
    </div>
    <div class="chat-bubble">
      {{ props.content }}
    </div>
    <div class="chat-footer opacity-50">
      {{ props.state }}
    </div>
  </div>
</template>