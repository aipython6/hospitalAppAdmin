<script lang="ts" setup>
import { Navigation } from 'swiper'
const modules = [ Navigation ]
type swiperType = {
  id: number;
  text: string;
  // 点击图片调整的URL
  url: string;
  // 图片的网络地址
  path: string;
};

const swiperItems: Array<swiperType> = [
  {
    id: 1,
    text: "图片1",
    url: "",
    path: "https://www.and2ui.cn:8090/images/settings/wechat/image/c3b2391b-c724-473b-9159-a9463891c00dswiper2.webp"
  },
  {
    id: 2,
    text: "图片2",
    url: "",
    path: "https://www.and2ui.cn:8090/images/settings/wechat/image/d202a78b-3416-4e43-ade2-1bb7a67adc79b0c1ed008ac29.jpg"
  },
  {
    id: 3,
    text: "图片3",
    url: "",
    path: "https://www.and2ui.cn:8090/images/settings/wechat/image/d916ee7c-c98c-4d05-9288-256587ce3da2swiper1.webp"
  }
];
</script>

<template>
  <div>
    <swiper class="swiper" :modules="modules" :pagination="{ clickable: true, dynamicBullets: true }" loop :option="{autoPlay: true}">
    <swiper-slide class="slide" v-for="item of swiperItems" :key="item.id">
      <img :src="item.path" class="h-full w-full" />
    </swiper-slide>
  </swiper>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/style/swiper/variables.scss';
  @import '@/style/swiper/mixins.scss';
  @import '@/style/swiper/style.scss';
  .swiper {
    @include swiper-wrapper()
  }
  .slide {
    @include swiper-slide()
  }
</style>