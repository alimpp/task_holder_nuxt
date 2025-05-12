<template>
    <div class="w-100 flex flex-column">
      <div class="w-100">
        <BaseBreadCrumbs />
      </div>
      <div class="flex w-100 h-80-dvh align-cemter justify-center" v-if="!pageLoading && userList.length == 0">
        <BaseEmptyState title="Users Not Found" text="Users list is empty please try again later" />
      </div>
     <div class="flex flex-column" v-if="pageLoading">
      <SkeletonSendFriendRequest v-for="n in 10" />
     </div>
    <div class="w-100 flex flex-column" v-else>
      <CardsSendFriendRequest v-for="(item, index) in userList" :key="index" :user="item" />
    </div>
    </div>
</template>
  
<script setup>
import { UsersStoreModule } from "~/stores/users";
import { UsersControllerModule } from "~/controllers/users";

const pageLoading = ref(false);

const userList = computed(() => {
  return UsersStoreModule.userlist.value;
});


definePageMeta({
  middleware: "auth",
});

onMounted(async () => {
  pageLoading.value = !pageLoading.value;
  await UsersControllerModule.getUsersList();
  pageLoading.value = !pageLoading.value;
});
</script>
  
