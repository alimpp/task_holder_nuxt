<template>
  <div class="w-100 flex flex-column">
    <div class="w-100">
      <BaseBreadCrumbs />
    </div>
    <div
      class="flex w-100 h-80-dvh align-cemter justify-center"
      v-if="!pageLoading && friendsList.length == 0"
    >
      <BaseEmptyState
        title="No Friends Found"
        text="Friends list is empty please try again later"
      />
    </div>
    <div class="flex flex-wrap justify-center" v-if="pageLoading">
      <div v-for="n in 10" class="w-375-px mx-10">
        <SkeletonFriendList />
      </div>
    </div>
    <div class="w-100 flex flex-wrap justify-center" v-else>
      <div class="w-375-px mx-10" v-for="(item, index) in friendsList">
        <CardsFriendList :key="index" :user="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { FriendsControllerModule } from "~/controllers/friends";
import { FriendsStoreModule } from "~/stores/friends";

definePageMeta({
  middleware: "auth",
});

const friendsList = computed(() => {
  return FriendsStoreModule.friendsList.value;
});

const pageLoading = ref(false);

onMounted(async () => {
  pageLoading.value = !pageLoading.value;
  await FriendsControllerModule.getFriends();
  pageLoading.value = !pageLoading.value;
});
</script>
