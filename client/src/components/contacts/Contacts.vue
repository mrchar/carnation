<script setup lang="ts">
import {useStorage} from "@vueuse/core";
import List from "../list/List.vue";
import NameCard from "./NameCard.vue";
import api from "../../api";
import {useContactsStore} from "../../store/contacts.ts";

const contactsStore = useContactsStore()
api.user.useListUsers()
    .then(({data}) => {
      contactsStore.setContacts(data.value)
    })

const current = useStorage("current", "")

const emit = defineEmits(["change"])

function onSelect(id: string): void {
  current.value = id
  emit("change", id);
}
</script>

<template>
  <List>
    <NameCard v-for="item in contactsStore.contacts"
              :key="item.id"
              :class="current===item.id && 'bg-base-300'"
              v-bind="item"
              @click="onSelect(item.id)"
    />
  </List>
</template>
