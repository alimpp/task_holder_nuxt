<template>
  <Layout />
</template>

<script setup>
import { ProfileStoreModule } from "~/stores/user";
const getProfile = () => {
  ProfileStoreModule.profile();
};
</script>
