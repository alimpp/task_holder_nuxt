<template>
  <span
    @click="getProfile"
    class="flex flex-column border-bottom w-100 mt-5 py-10 cursor-pointer"
    >click here to get profile</span
  >
  <Layout />
</template>

<script setup>
import { ProfileStoreModule } from "~/stores/user";
const getProfile = () => {
  ProfileStoreModule.profile();
};
</script>
