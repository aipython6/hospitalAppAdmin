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
  <div class="grid grid-cols-2 gap-4 p-4 sm:p-7 sm:w-2/5">
    <div
      class="flex items-center h-10 rounded-sm shadow-inner cursor-pointer opacity-80 w-28 bg-emerald-200 sm:w-40 sm:h-20"
    >
      <Icon
        icon="teenyicons:appointments-solid"
        color="#048519"
        class="w-8 h-8 pl-2 sm:w-12 sm:h-12"
      />
      <span class="pl-2 text-sm font-bold text-white sm:text-xl">预约挂号</span>
    </div>
    <div
      id="button"
      class="relative flex items-center justify-center w-32 rounded-sm shadow-inner cursor-pointer opacity-80 bg-emerald-200 sm:w-44"
    >
      <Icon icon="cib:wechat" color="#048519" class="w-8 h-8 sm:w-12 sm:h-12" />
      <span class="pl-2 text-sm font-bold text-white sm:text-xl">微信公众号</span>
      <div
        class="absolute flex items-center justify-center w-32 h-32 bg-green-100 qrcode m1 top-24 left-6"
      >
        <img src="../../assets/img/wechat.jpg" class="p-1 w-28 h-28" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#button {
  .qrcode {
    transform-origin: bottom;
    transform: scale(0);
    transition: all 0.4s ease-in-out;
    opacity: 0;
    &:hover {
      transform: scale(1);
      opacity: 1;
    }
  }
}
</style>
