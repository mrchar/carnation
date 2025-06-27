<script setup lang="ts">
import {ref} from 'vue'
import {DateTime} from "luxon";
import List from "../components/List.vue";
import Textarea from "../components/Textarea.vue";
import Button from "../components/Button.vue";
import Chatbox from "../components/chatbox/Chatbox.vue";
import type {Message, User} from "../components/chatbox/types.ts";

const members: User[] = [
  {
    id: "obi-wan-kenobi@jedi.org",
    name: "Obi-Wan Kenobi",
    avatar: "https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
  },
  {
    id: "anakin@sith.gov",
    name: "Anakin",
    avatar: "https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
  }
]

const messages: Message[] = ref([
  {
    id: "1",
    from: "obi-wan-kenobi@jedi.org",
    state: "Seen",
    content: "You were the Chosen One!",
    sendTime: DateTime.now(),
    receiveTime: DateTime.now()
  },
  {
    id: "2",
    from: "anakin@sith.gov",
    state: "Delivered",
    content: "I hate you!",
    sendTime: DateTime.now(),
    receiveTime: DateTime.now()
  }
])

const self = "anakin@sith.gov"

const editingMessage = ref("")

function sendMessage(): void {
  if (editingMessage.value === "") {
    return
  }

  messages.value.push({
    id: crypto.randomUUID(),
    from: self,
    state: "Delivered",
    content: editingMessage.value,
    sendTime: DateTime.now(),
    receiveTime: DateTime.now()
  })

  editingMessage.value = "";
}
</script>

<template>
  <div class="flex w-full h-full">
    <div class="min-w-max h-full bg-gray-900 rounded-lg overflow-auto">
      <List/>
    </div>
    <div class="p-2 flex flex-col justify-between w-64 h-full flex-1">
      <Chatbox :self="self" :members="members" :messages="messages"/>
      <div class="flex w-full gap-2">
        <Textarea v-model="editingMessage" class="flex-1" @keydown.enter="sendMessage()"/>
        <Button class="flex-none h-full" @click="sendMessage()"/>
      </div>
    </div>
  </div>
</template>
