<script setup lang="ts">
</script>

<template>
    <el-config-provider :locale="locale">
        <div class="h-full w-full">
            <router-view></router-view>
        </div>
    </el-config-provider>
</template>

<style>
    #nprogress .bar { background: #068b1b !important;}
</style>
