<script setup>
const props = defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div>
    <h1 class="text-lg font-medium white">{{ props.title }}</h1>
    <p class="text-sm text-white/50">
      <slot name="description" />
    </p>
  </div>
</template>
