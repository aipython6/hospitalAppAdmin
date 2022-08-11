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
    class="relative w-24 h-24 p-1 duration-500 bg-green-400 rounded-md shadow-2xl cursor-pointer sm:flex sm:h-40 sm:w-40 opacity-80 hover:scale-110 hover:bg-green-700"
  >
    <span
      class="w-full h-full p-1 font-sans text-sm font-bold tracking-widest text-gray-100 transition duration-700 ease-in-out transform sm:text-xl hover:translate-x-7 hover:translate-y-14"
      >{{ text }}</span
    >
    <Icon
      :icon="icon"
      :horizontalFlip="true"
      class="absolute w-8 h-8 p-1 sm:w-16 sm:h-16 bottom-1"
    />
  </div>
</template>
