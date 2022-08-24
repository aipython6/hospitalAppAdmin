<script lang="ts" setup>
import console from "console";

const router = useRouter();
const goHome = () => {
  router.push({ name: "Home" });
};

const data = [
  { id: 1, text: "就医导航", icon: "mdi:application-cog" },
  { id: 2, text: "公众浏览", icon: "bi:people-fill" },
  { id: 3, text: "OA系统", icon: "fluent:app-folder-16-filled" }
];

const boxConfig = reactive<Array>(data);

const gotoAppointment = () => {
  console.log("click");
};

const gotoPublic = () => {
  router.push({ name: "Public" });
};
</script>

<template>
  <!-- <HomePageBanner /> -->
  <div>
    <div class="bg-no-repeat bg-cover sm:h-screen bg-homepage-bg1">
      <div class="flex items-center justify-center">
        <div class="hidden sm:block">
          <img src="../../src/assets/img/logo.png" class="cursor-pointer" @click="goHome" />
          <div class="flex justify-start space-x-9 p-7">
            <HomePageButtonBox
              :text="item.text"
              :icon="item.icon"
              v-for="(item) of boxConfig"
              :key="item.id"
              @gotoPublic="gotoPublic"
            />
          </div>
          <div>
            <HomePageHoverBox @gotoAppointment="gotoAppointment" />
          </div>
        </div>
      </div>
    </div>
    <div class="sm:hidden">
      <div>
        <img src="../../src/assets/img/logo.png" class="cursor-pointer" @click="goHome" />
      </div>
      <div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-3">
        <HomePageButtonBox
          :text="item.text"
          :icon="item.icon"
          v-for="(item) of boxConfig"
          :key="item.id"
        />
      </div>
      <div>
        <HomePageHoverBox @gotoAppointment="gotoAppointment" />
      </div>
    </div>
  </div>
</template>
