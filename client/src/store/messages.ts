import {ref} from "vue";
import {defineStore} from "pinia";
import type {Message} from "../components/chatbox/types.ts";

export const useMessagesStore = defineStore("messages", () => {
    const messages = ref<Record<string, Message[]>>({})

    function addMessage(from: string, message: Message) {
        const result = messages.value[from]
        if (result) {
            result.push(message)
            return
        }

        messages.value[from] = [message]
    }

    return {
        messages,
        addMessage
    }
})