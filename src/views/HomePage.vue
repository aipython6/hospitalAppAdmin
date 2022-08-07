<script lang="ts" setup>
const router = useRouter();
const goHome = () => {
  router.push({ name: "Home" });
};

const data = [
  { id: 1, text: "就医导航", icon: "mdi:application-cog" },
  { id: 2, text: "公众版", icon: "bi:people-fill" },
  { id: 3, text: "OA系统", icon: "fluent:app-folder-16-filled" }
];

const boxConfig = reactive<Array>(data);
</script>

<template>
  <div class="bg-no-repeat xs:bg-contain sm:bg-contain md:bg-cover bg-homepage-bg1">
    <div class="max-w-md">
      <img src="../../src/assets/img/logo.png" class="cursor-pointer" @click="goHome" />
      <div>
        <HomePageButtonBox
          :text="item.text"
          :icon="item.icon"
          v-for="(item, index) of boxConfig"
          :key="item.id"
        />
      </div>
    </div>
  </div>
</template>
