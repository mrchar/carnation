<script setup lang="ts">
import {computed} from "vue";
import type {Props as ChatBubbleProps} from "./ChatBubble.vue"
import ChatBubble from "./ChatBubble.vue";
import type {Message, User} from "./types.ts"

export type Props = {
  self: string
  members: User[]
  messages: Message[]
}

const props = withDefaults(defineProps<Props>(),
    {self: "unknown", members: [], messages: []}
)

// TODO: 监听messages变化，只处理新增的消息
const parsedMessages = computed(() => {
  return props.messages.map(item => {
    const sender = props.members.find(member => member.id === item.from)
    return {
      ...item,
      incoming: props.self !== item.from,
      sender: sender
    } as ChatBubbleProps
  })
})
</script>

<template>
  <div>
    <ChatBubble v-for="item in parsedMessages" :key="item.id" v-bind="item"/>
  </div>
</template>
