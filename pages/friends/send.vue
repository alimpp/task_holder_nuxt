<template>
    <div class="w-100 flex flex-column">
      <div class="w-100">
        <BaseBreadCrumbs />
      </div>
      <div class="w-100 flex flex-column">
        <CardsSendFriendRequest v-for="(item, index) in userList" :key="index" :user="item" />
      </div>
    </div>
</template>
  
<script setup>
import { UsersStoreModule } from "~/stores/users";
import { UsersControllerModule } from "~/controllers/users";

const userList = computed(() => {
  return UsersStoreModule.userlist.value;
});


definePageMeta({
  middleware: "auth",
});

onMounted(async () => {
  await UsersControllerModule.getUsersList();
});
</script>
  
