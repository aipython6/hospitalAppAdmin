<script lang="ts" setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
  text: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: "mdi:application-cog"
  }
});
</script>

<template>
  <div
    class="max-w-md bg-green-700 shadow-2xl cursor-pointer opacity-80 w-44 h-44 rounded-xl hover:shadow-2xl"
  >
    <span class="p-1 text-2xl font-bold">{{ text }}</span>
    <Icon :icon="icon" :horizontalFlip="true" class="w-12 h-12 p-1" />
  </div>
</template>
