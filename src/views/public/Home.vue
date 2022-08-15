<script lang="ts" setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";
type publicMenu = {
  id?: number;
  name?: string;
  router?: string;
  children?: [];
};
const data = [
  { id: 1, name: "患者飞鸿", router: "/nhfyyy/patient", children: [] },
  { id: 2, name: "医院概况", router: "/nhfyyy/description", children: [] },
  { id: 3, name: "医疗服务", router: "/nhfyyy/service", children: [] },
  { id: 4, name: "新闻公告", router: "/nhfyyy/news", children: [] },
  { id: 5, name: "科室导航", router: "/nhfyyy/department", children: [] },
  { id: 6, name: "科学研究", router: "/nhfyyy/science", children: [] },
  { id: 7, name: "医学教育", router: "/nhfyyy/education", children: [] },
  { id: 8, name: "历史文化", router: "/nhfyyy/history", children: [] }
];

const Menus = reactive<Array<publicMenu>>(data);
</script>
<template>
  <Popover class="relative bg-white">
    <div class="px-4 mx-auto max-w-7xl sm:px-6">
      <div
        class="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">workflow</span>
            <img src="../../../src/assets/img/logo.png" class="w-auto h-8 sm:h-10" alt="" />
          </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open Menu</span>
            <MenuIcon class="w-6 h-6" aria-hidden="true"></MenuIcon>
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-400' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 '
              ]"
            >
              <span>Solution</span>
              <hevronDownIcon
                :class="[
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group:hover:text-gray-500'
                ]"
                aria-hidden="true"
              />
            </PopoverButton>
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="duration-150 ease-in transitioin"
              leave-from-class="translate-y-4 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
            >
              <PopoverPanel
                class="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              >
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                    <a
                      v-for="item in Menus"
                      :key="item.id"
                      :href="item.router"
                      class="flex items-start p-3 -m-3 rounded-lg hover:ng-gray-50"
                    >
                      <component
                        :is="item.name"
                        class="flex-shrink-0 w-6 h-6 text-gray-400"
                        aria-hidden="true"
                      />
                      <span class="ml-3">{{ item.name }}</span>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
      </div>
    </div>
  </Popover>
  <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Pricing </a>
  <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Docs </a>
</template>
