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
    <div class="flex flex-column" v-if="pageLoading">
      <SkeletonRequestList v-for="n in 10" />
    </div>
    <div class="w-100 flex flex-column">
      <CardsAcceptFriendRequest
        v-for="(item, index) in requestList"
        :key="index"
        :user="item"
      />
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
