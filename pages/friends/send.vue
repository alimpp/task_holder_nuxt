<template>
  <div class="w-100 flex flex-column">
    <div class="w-100">
      <BaseBreadCrumbs />
    </div>
    <div
      class="flex w-100 h-80-dvh align-cemter justify-center"
      v-if="!pageLoading && userList.length == 0"
    >
      <BaseEmptyState
        title="Users Not Found"
        text="Users list is empty please try again later"
      />
    </div>
    <div class="flex flex-wrap justify-center" v-if="pageLoading">
      <div v-for="n in 10" class="w-375-px mx-10">
        <SkeletonSendFriendRequest />
      </div>
    </div>
    <div class="w-100 flex flex-wrap justify-center" v-else>
      <div class="w-375-px mx-10" v-for="(item, index) in userList">
        <CardsSendFriendRequest :key="index" :user="item" />
      </div>
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
