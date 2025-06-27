<script setup lang="ts">
export type Props = {
  alt?: string
  src: string
}

const props = withDefaults(defineProps<Props>(), {alt: "Avatar"})
</script>
<template>
  <div class="avatar">
    <div class="rounded">
      <img :alt="props.alt" :src="props.src"/>
    </div>
  </div>
</template>