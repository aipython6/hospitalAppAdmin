<script lang="ts" setup>
type publicMenu = {
  id?: number;
  name?: string;
  router?: string;
  children?: publicMenu[];
};

type Depts = {
  id: number;
  dept_name: string;
  router: string;
}
const data: publicMenu[] = [
  {
    id: 1,
    name: "患者飞鸿",
    router: "/nhfyyy/patient",
    children: [{ id: 9, name: "患者视频", router: "/nhfy/patient/video" }]
  },
  {
    id: 2,
    name: "医院概况",
    router: "/nhfyyy/description",
    children: [
      { id: 10, name: "医院介绍", router: "/nhfy/description/basic" },
      { id: 11, name: "现任领导", router: "/nhfy/description/leader" },
      { id: 12, name: "组织架构", router: "/nhfy/description/framework" }
    ]
  },
  {
    id: 3,
    name: "医疗服务",
    router: "/nhfyyy/service",
    children: [
      { id: 13, name: "预约挂号", router: "/nhfy/service/appointment" },
      { id: 14, name: "就医指南", router: "/nhfy/service/guide" },
      { id: 15, name: "医生简介", router: "/nhfy/description/doctor" },
      { id: 16, name: "护理服务", router: "/nhfy/description/nursing" }
    ]
  },
  {
    id: 4,
    name: "新闻公告",
    router: "/nhfyyy/notice",
    children: [
      { id: 17, name: "医院新闻", router: "/nhfy/notice/news" },
      { id: 18, name: "媒体聚焦", router: "/nhfy/notice/media" },
      { id: 19, name: "招聘信息", router: "/nhfy/notice/recruit" }
    ]
  },
  {
    id: 5,
    name: "科室导航",
    router: "/nhfyyy/department",
    children: [
      { id: 20, name: "医疗科室", router: "/nhfy/department/medicalDept" },
      { id: 21, name: "医技科室", router: "/nhfy/department/medicalTDept" },
      { id: 22, name: "医疗中心", router: "/nhfy/department/medicalCenter" }
    ]
  },
  { id: 6, name: "科学研究", router: "/nhfyyy/science", children: [] },
  { id: 7, name: "医学教育", router: "/nhfyyy/education", children: [] },
  { id: 8, name: "历史文化", router: "/nhfyyy/history", children: [] }
];

const Menus = reactive<Array<publicMenu>>(data);
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const goHome = () => {
  router.push({ name: 'Home' })
}

// depts
const dept_data: Depts[] = [
  {id: 1, dept_name: '心血管内科', router: '/xxgnk'},
  {id: 2, dept_name: '心血管内科', router: '/xxgnk'},
  {id: 3, dept_name: '心血管内科', router: '/xxgnk'},
  {id: 4, dept_name: '心血管内科', router: '/xxgnk'},
  {id: 5, dept_name: '心血管内科', router: '/xxgnk'},
  {id: 6, dept_name: '心血管内科', router: '/xxgnk'},
  {id: 7, dept_name: '心血管内科', router: '/xxgnk'},
  {id: 8, dept_name: '心血管内科', router: '/xxgnk'},
  {id: 9, dept_name: '心血管内科', router: '/xxgnk'},
  {id: 10, dept_name: '心血管内科', router: '/xxgnk'},
]

const depts = reactive<Array<Depts>>(dept_data)

</script>
<template>
  <div class="">
    <div class="flex justify-start items-center -pl-2">
      <img src="../../../src/assets/img/logo.png" class="h-14 w-50" @click="goHome" />
    </div>
    <div class="sticky top-0 z-10 px-2">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        :router="true"
      >
        <el-sub-menu :index="item.id+''" v-for="item of Menus" :key="item.id">
          <template #title>{{ item.name }}</template>
          <el-menu-item
            :index="subitem.id+''"
            v-for="subitem of item.children"
            :key="subitem.id"
          >{{ subitem.name }}</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="px-3 w-full h-full">
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
        <div class="md:text-xl font-bold text-green-700 text-sm">开诊科室</div>
        <div class="flex space-x-2">
          <el-input placeholder="科室名称/医生姓名" />
          <el-button type="success">搜索</el-button>
        </div>
      </div>
      <!-- 科室列表 -->
      <div class="mt-8">
        <div class="grid md:grid-cols-5 grid-cols-2 md:gap-4 gap-2">
          <div class="h-10 w-32 bg-gray-200 flex justify-center items-center rounded-md cursor-pointer hover:bg-green-700 md:font-bold md:text-md text-sm" v-for="item of dept_data" :key="item.id">{{ item.dept_name }}</div>
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
