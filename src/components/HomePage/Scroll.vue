<script lang="ts" setup>
import SwiperClass, { Navigation } from "swiper";
const banners = [
  { index: 1, src: "https://swiperjs.com/demos/images/nature-1.jpg" },
  { index: 2, src: "https://swiperjs.com/demos/images/nature-2.jpg" },
  { index: 3, src: "https://swiperjs.com/demos/images/nature-3.jpg" },
  { index: 4, src: "https://swiperjs.com/demos/images/nature-4.jpg" },
  { index: 5, src: "https://swiperjs.com/demos/images/nature-5.jpg" },
  { index: 6, src: "https://swiperjs.com/demos/images/nature-6.jpg" },
  { index: 7, src: "https://swiperjs.com/demos/images/nature-7.jpg" },
  { index: 8, src: "https://swiperjs.com/demos/images/nature-8.jpg" }
];
const modules = [Navigation];
let swiperRef: SwiperClass | null = null;
const setSwiperRef = (swiper: SwiperClass) => {
  swiperRef = swiper;
};
const handleResize = () => {
  swiperRef?.changeDirection(window.innerWidth <= 960 ? "vertical" : "horizontal");
};
</script>
<template>
  <div class="">
    <swiper
      class="swiper"
      :modules="modules"
      direction="horizontal"
      :slides-per-view="6"
      :space-between="30"
      :navigation="true"
      @swiper="setSwiperRef"
      @resize="handleResize"
    >
      <swiper-slide class="slide cursor-pointer" v-for="item of banners" :key="item.index">
        <img :src="item.src" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/swiper/variables.scss";
@import "@/style/swiper/mixins.scss";
@import "@/style/swiper/style.scss";
.swiper {
  @include swiper-wrapper();

  &.swiper-vertical {
    ::v-deep(.swiper-button-next) {
      right: 20px;
      transform: rotate(90deg);
    }
    ::v-deep(.swiper-button-prev) {
      left: 20px;
      transform: rotate(90deg);
    }
  }
}

.slide {
  @include swiper-slide();
}
</style>