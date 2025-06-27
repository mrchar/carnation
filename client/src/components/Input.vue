<script setup lang="ts">
export type Props = {
  label?: string
  placeholder?: string
  errors?: { message: string }[]
}

const props = defineProps<Props>()

const model = defineModel()
</script>

<template>
  <label v-if="label" class="label">
    {{ props.label }}
  </label>
  <input v-model="model"
         type="text"
         class="input"
         :class="errors?.length && ['border-error']"
         :placeholder="props.placeholder"/>
  <p v-if="errors?.length" class="label text-error">
    {{ props.errors[0].message }}
  </p>
</template>
