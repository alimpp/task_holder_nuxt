<template>
  <Layout />
</template>

<script setup>
import { UserControllerModule } from "@/controllers/user";

onMounted(async () => {
  await UserControllerModule.getUserProfile();
});
</script>
