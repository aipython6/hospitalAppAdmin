<script lang="ts" setup>
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
    <el-carousel
      :interval="4000"
      type="card"
      height="400px"
      trigger="click"
      indicator-position="none"
    >
      <el-carousel-item v-for="item of swiperItems" :key="item.id">
        <div class="relative">
          <img :src="item.path" />
          <span
            class="absolute bottom-0 left-0 bg-gray-200 w-full opacity-70 flex items-center md:p-2 md:text-md text-sm text-gray-700"
          >{{ item.text }}</span>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>