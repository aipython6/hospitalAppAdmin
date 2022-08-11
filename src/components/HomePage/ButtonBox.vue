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
    class="flex relative h-40 w-40 cursor-pointer rounded-md opacity-80 bg-green-400 p-1 shadow-2xl duration-500 hover:scale-110 hover:bg-green-700"
  >
    <span class="text-xl p-1 w-full h-full transform font-sans font-bold tracking-widest text-gray-100 transition duration-700 ease-in-out hover:translate-x-7 hover:translate-y-14">{{ text }}</span>
    <Icon :icon="icon" :horizontalFlip="true" class="w-16 h-16 p-1 absolute bottom-1" />
  </div>
</template>
