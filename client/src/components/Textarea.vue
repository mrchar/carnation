<script setup lang="ts">
import {defineModel} from "vue";

export type Props = {
  placeholder?: string
}

const props = defineProps<Props>()

const model = defineModel()
</script>
<template>
  <textarea v-model="model" class="textarea" :placeholder="props.placeholder"></textarea>
</template>