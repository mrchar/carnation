import {ref} from 'vue'
import {defineStore} from "pinia";
import type {User} from "../components/chatbox/types.ts";

export const useContactsStore = defineStore("contacts", () => {
    const contacts = ref<User[]>([])

    function addContact(value: User) {
        const index = contacts.value.findIndex(item => item.id === value.id)
        if (index > -1) {
            contacts.value[index] = value
            return
        }

        contacts.value.push(value)
    }

    function setContacts(value: User[]) {
        contacts.value = value
    }

    return {
        contacts,
        addContact,
        setContacts,
    }
})