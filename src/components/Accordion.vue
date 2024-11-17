<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <Disclosure v-slot="{ open }">
    <DisclosureButton
      class="py-2 w-full text-start flex items-center justify-between gap-2 font-medium bg-slate-200 dark:bg-secondary dark:text-white px-2 rounded-md relative z-10 text-sm"
    >
      {{ props.title }}
      <ChevronDownIcon
        class="size-4 duration-300"
        :class="open ? 'rotate-180' : ''"
      />
    </DisclosureButton>
    <div
      class="grid duration-200"
      :class="open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
    >
      <DisclosurePanel
        class="text-white/60 bg-secondary rounded-lg text-sm overflow-hidden duration-300 ease-in-out px-2"
        :class="open ? 'py-2' : 'p-0'"
        static
      >
        {{ props.description }}
      </DisclosurePanel>
    </div>
  </Disclosure>
</template>
