<template>
  <div class="w-100 flex flex-column">
    <div class="w-100">
      <BaseBreadCrumbs />
    </div>
    <div
      class="flex w-100 h-80-dvh align-cemter justify-center"
      v-if="!pageLoading && requestList.length == 0"
    >
      <BaseEmptyState
        title="No Requests Found"
        text="Request list is empty please try again later"
      />
    </div>
    <div class="flex flex-wrap justify-center" v-if="pageLoading">
      <div v-for="n in 10" class="w-375-px mx-10">
        <SkeletonRequestList />
      </div>
    </div>
    <div class="w-100 flex flex-wrap justify-center" v-else>
      <div class="w-375-px mx-10" v-for="(item, index) in requestList">
        <CardsAcceptFriendRequest :key="index" :user="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { RequestStoreModule } from "~/stores/request";
import { RequestControllerModule } from "~/controllers/request";

definePageMeta({
  middleware: "auth",
});

const requestList = computed(() => {
  return RequestStoreModule.requestList.value;
});
const pageLoading = ref(false);

onMounted(async () => {
  pageLoading.value = !pageLoading.value;
  await RequestControllerModule.getRequests();
  pageLoading.value = !pageLoading.value;
});
</script>
