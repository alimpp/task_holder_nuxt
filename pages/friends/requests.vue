<template>
    <div class="w-100 flex flex-column">
      <div class="w-100">
        <BaseBreadCrumbs />
      </div>
      <div class="w-100 flex flex-column">
         <CardsAcceptFriendRequest v-for="(item, index) in requestList" :key="index" :user="item" />
      </div>
    </div>
</template>
  
<script setup>
import { RequestStoreModule } from '~/stores/request';
import { RequestControllerModule } from "~/controllers/request";

definePageMeta({
  middleware: "auth",
});

const requestList = computed(() => {  
  return RequestStoreModule.requestList.value;
})

onMounted(async () => {
  await RequestControllerModule.getRequests();
});
</script>
  