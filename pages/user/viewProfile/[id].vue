<template>
  <div class="w-100 flex flex-column">
    <div class="w-100">
      <BaseBreadCrumbs />
    </div>
    <div
      class="w-100 h-85-dvh flex flex-column align-center justify-center"
      v-if="loading"
    >
      <IconsSpinner color="#000" width="50" height="50" />
      <span class="f-s-14 f-w-600 color-gray pt-10">Please Waiting . . . </span>
    </div>
    <div class="w-100 flex flex-column" v-else>
      <div class="w-100 flex mt-20 slid-up-animation-3">
        <div class="w-100 flex">
          <BaseAvatar
            width="120px"
            height="120px"
            :avatar="dataSource.userInfo.avatarUrl"
          />
          <div class="flex flex-column justify-center px-15">
            <span class="f-s-18 f-w-600">{{
              dataSource.userInfo.fullname
            }}</span>
            <span class="f-s-14 f-w-600 color-gray">{{
              dataSource.userInfo.email
            }}</span>
            <span class="f-s-14 f-w-600 pt-5">Bio :</span>
            <span
              class="f-s-12 f-w-500 color-primary"
              v-if="dataSource.userInfo.bio"
              >{{ dataSource.userInfo.bio }}</span
            >
            <span class="f-s-12 f-w-500 color-primary" v-else>Empty Bio</span>
          </div>
        </div>
      </div>
      <div
        v-if="dataSource.skills.length > 0"
        class="slid-up-animation-1s bg-secondary-gray border-rounded w-100 border-info py-10 px-2 mt-15 flex flex-wrap"
      >
        <span
          class="f-s-12 f-w-500 px-10 bg-info color-primary mx-5 py-8 border-rounded"
          v-for="item in dataSource.skills"
          >{{ item.skill }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

import { ViewProfileControllerModule } from "@/controllers/viewProfile";
import { ViewProfileStoreModule } from "@/stores/viewProfile";

const loading = ref(false);

const dataSource = computed(() => {
  return ViewProfileStoreModule.targetUserProfile.value;
});

onMounted(async () => {
  loading.value = true;
  await ViewProfileControllerModule.viewProfile(route.params.id);
  loading.value = false;
});
</script>
