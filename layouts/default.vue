<template>
  <Layout />
</template>

<script setup>
import { UserControllerModule } from "@/controllers/user";
import { UsersControllerModule } from "~/controllers/users";

onMounted(async () => {
  await UserControllerModule.getUserProfile();
  await UsersControllerModule.getUsersList();
});
</script>
