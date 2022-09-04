<script lang="ts" setup>
import { fetchMenu, MenuType } from "@/api/menus/menus";

type Depts = {
  id: number;
  dept_name: string;
  router: string;
};
// const data: publicMenu[] = [
//   {
//     id: 1,
//     name: "患者飞鸿",
//     router: "/nhfyyy/patient",
//     children: [{ id: 9, name: "患者视频", router: "/nhfy/patient/video" }]
//   },
//   {
//     id: 2,
//     name: "医院概况",
//     router: "/nhfyyy/description",
//     children: [
//       { id: 10, name: "医院介绍", router: "/nhfy/description/basic" },
//       { id: 11, name: "现任领导", router: "/nhfy/description/leader" },
//       { id: 12, name: "组织架构", router: "/nhfy/description/framework" }
//     ]
//   },
//   {
//     id: 3,
//     name: "医疗服务",
//     router: "/nhfyyy/service",
//     children: [
//       { id: 13, name: "预约挂号", router: "/nhfy/service/appointment" },
//       { id: 14, name: "就医指南", router: "/nhfy/service/guide" },
//       { id: 15, name: "医生简介", router: "/nhfy/description/doctor" },
//       { id: 16, name: "护理服务", router: "/nhfy/description/nursing" }
//     ]
//   },
//   {
//     id: 4,
//     name: "新闻公告",
//     router: "/nhfyyy/notice",
//     children: [
//       { id: 17, name: "医院新闻", router: "/nhfy/notice/news" },
//       { id: 18, name: "媒体聚焦", router: "/nhfy/notice/media" },
//       { id: 19, name: "招聘信息", router: "/nhfy/notice/recruit" }
//     ]
//   },
//   {
//     id: 5,
//     name: "科室导航",
//     router: "/nhfyyy/department",
//     children: [
//       { id: 20, name: "医疗科室", router: "/nhfy/department/medicalDept" },
//       { id: 21, name: "医技科室", router: "/nhfy/department/medicalTDept" },
//       { id: 22, name: "医疗中心", router: "/nhfy/department/medicalCenter" }
//     ]
//   },
//   { id: 6, name: "科学研究", router: "/nhfyyy/science", children: [] },
//   { id: 7, name: "医学教育", router: "/nhfyyy/education", children: [] },
//   { id: 8, name: "历史文化", router: "/nhfyyy/history", children: [] }
// ];

// 初始化Menus
let TempData = new Array<MenuType>();

onMounted(async () => {
  const { data } = await fetchMenu();
  data.forEach((a) => {
    TempData.push(a);
  });
});

let Menus: MenuType[] = reactive(TempData);

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const goHome = () => {
  router.push({ name: "Home" });
};

// depts
const dept_data: Depts[] = [
  { id: 1, dept_name: "心血管内科", router: "/xxgnk" },
  { id: 2, dept_name: "心血管内科", router: "/xxgnk" },
  { id: 3, dept_name: "心血管内科", router: "/xxgnk" },
  { id: 4, dept_name: "心血管内科", router: "/xxgnk" },
  { id: 5, dept_name: "心血管内科", router: "/xxgnk" },
  { id: 6, dept_name: "心血管内科", router: "/xxgnk" },
  { id: 7, dept_name: "心血管内科", router: "/xxgnk" },
  { id: 8, dept_name: "心血管内科", router: "/xxgnk" },
  { id: 9, dept_name: "心血管内科", router: "/xxgnk" },
  { id: 10, dept_name: "心血管内科", router: "/xxgnk" }
];

const menuList = [
  { id: 1, name: "医院概况", router: "" },
  { id: 2, name: "医疗服务", router: "" },
  { id: 3, name: "新闻公告", router: "" },
  { id: 4, name: "科室导航", router: "" },
  { id: 5, name: "科学研究", router: "" },
  { id: 6, name: "医学教育", router: "" },
  { id: 7, name: "科学研究", router: "" },
  { id: 8, name: "历史文化", router: "" },
  { id: 9, name: "加入我们", router: "" }
];

const depts = reactive<Array<Depts>>(dept_data);
</script>
<template>
  <div class="">
    <div class="flex items-center justify-start -pl-2">
      <img src="../../../src/assets/img/logo.png" class="h-14 w-50" @click="goHome" />
    </div>
    <div class="sticky top-0 z-10 px-2">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#fff"
        text-color="#000"
        active-text-color="#077c1a"
        @select="handleSelect"
      >
        <el-menu-item :index="item.id + ''" v-for="item of Menus" :key="item.id">{{
          item.name
        }}</el-menu-item>
        <el-sub-menu index="2">
          <template #title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="w-full h-full px-3">
      <!-- 头部的swiper -->
      <HomePageSwiper />
    </div>
    <div class="px-3">
      <!-- 就医导航的swiper -->
      <HomePageScroll />
    </div>
    <div class="px-3">
      <!-- 首行内容 -->
      <div class="md:flex md:justify-between">
        <div class="text-sm font-bold text-green-700 md:text-xl">开诊科室</div>
        <div class="flex space-x-2">
          <el-input placeholder="科室名称/医生姓名" />
          <el-button type="success">搜索</el-button>
        </div>
      </div>
      <!-- 科室列表 -->
      <div class="mt-8">
        <div class="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-4">
          <div
            class="flex items-center justify-center w-32 h-10 text-sm bg-gray-200 rounded-md cursor-pointer hover:bg-green-700 md:font-bold md:text-md"
            v-for="item of dept_data"
            :key="item.id"
          >
            {{ item.dept_name }}
          </div>
        </div>
      </div>
      <!-- 导航的list -->
      <div class="grid grid-cols-1 py-8 md:px-24 md:py-14 md:grid-cols-2">
        <div
          class="grid grid-cols-2 gap-0 text-sm text-gray-600 md:gap-2 md:grid-cols-3 md:text-xl"
        >
          <div
            v-for="item of menuList"
            :key="item.id"
            class="cursor-pointer hover:text-green-700 hover:font-bold"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="flex mt-3 space-x-2 md:space-x-12 md:justify-end md:mt-0">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            class="w-16 h-16 md:h-24 md:w-24"
            alt=""
          />
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            class="w-16 h-16 md:h-24 md:w-24"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="mt-10">
      <HomePageFooter />
    </div>
  </div>
</template>

<style>
.el-input {
  width: 300px;
}
</style>
