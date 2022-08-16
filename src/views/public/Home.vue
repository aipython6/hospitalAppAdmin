<script lang="ts" setup>
type publicMenu = {
  id?: number;
  name?: string;
  router?: string;
  children?: publicMenu[];
};
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
</script>
<template>
  <div class="px-2 pt-2 sm:px-10">
    <div class="flex justify-start items-center -pl-2">
      <img src="../../../src/assets/img/logo.png" class="h-14 w-50" @click="goHome" />
    </div>
    <div>
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
  </div>
</template>
