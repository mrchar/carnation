<script setup lang="ts">
export type Props = {
  title?: string
}

const props = defineProps<Props>()
</script>
<template>
  <fieldset class="fieldset border p-4">
    <legend v-if="props.title" class="fieldset-legend">
      {{ props.title }}
    </legend>
    <slot/>
  </fieldset>
</template>
