<script setup lang="ts">
import {computed, ref} from 'vue'
import {DateTime} from "luxon";
import Textarea from "../components/Textarea.vue";
import Button from "../components/Button.vue";
import Chatbox from "../components/chatbox/Chatbox.vue";
import {useUserStore} from "../store/user.ts";
import {useMessagesStore} from "../store/messages.ts";
import Contacts from "../components/contacts/Contacts.vue";
import {useStompClient} from "../composables/stomp.ts";
import {useContactsStore} from "../store/contacts.ts";
import {storeToRefs} from "pinia";

const userStore = useUserStore()

const self = userStore.user.id

const contactsStore = useContactsStore()

const {contacts: members} = storeToRefs(contactsStore)

const messagesStore = useMessagesStore()

const receiver = ref("")

const messages = computed(() => {
  return messagesStore.messages[receiver.value] || []
})

const editingMessage = ref("")

const client = useStompClient()

function sendMessage(): void {
  if (editingMessage.value === "") {
    return
  }

  const message = {
    id: crypto.randomUUID(),
    from: self,
    to: receiver.value,
    state: "Delivered",
    content: editingMessage.value,
    sendTime: DateTime.now(),
    receiveTime: DateTime.now()
  }

  messages.value.push(message)

  client.publish({destination: '/chat/send', body: JSON.stringify(message)})

  editingMessage.value = "";
}

function onContactsChange(id: string) {
  receiver.value = id
}
</script>

<template>
  <div class="flex w-full h-full">
    <div class="min-w-max h-full  rounded-lg overflow-auto">
      <Contacts @change="onContactsChange"/>
    </div>
    <div class="p-1 flex flex-col justify-between w-64 h-full flex-1">
      <Chatbox class="flex-1 h-128" :self="self" :members="members" :messages="messages"/>
      <div class="flex-none flex w-full gap-2">
        <Textarea v-model="editingMessage" class="flex-1" @keydown.enter="sendMessage()"/>
        <Button class="flex-none h-full" @click="sendMessage()">
          发送
        </Button>
      </div>
    </div>
  </div>
</template>
