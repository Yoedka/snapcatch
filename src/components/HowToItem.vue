<script setup>
const props = defineProps({
  title: String,
  description: String,
  number: Number,
  isActive: { Boolean, default: false },
});
</script>

<template>
  <div
    class="size-7 grid place-items-center font-semibold border border-primary rounded-full flex-none"
    :class="{
      'text-primary bg-transparent': !props.isActive,
      'text-white bg-primary': props.isActive,
    }"
  >
    {{ props.number }}
  </div>
  <div class="flex flex-col text-secondary dark:text-white">
    <h1 class="font-semibold">{{ props.title }}</h1>
    <p
      class="text-xs sm:text-sm dark:opacity-50 dark:font-extralight dark:tracking-wide"
    >
      {{ props.description }}
    </p>
  </div>
</template>
