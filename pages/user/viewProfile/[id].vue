<template>
  <div class="w-100 flex flex-column">
    <div class="w-100">
      <BaseBreadCrumbs />
    </div>
    <div class="w-100 flex flex-column" v-if="loading">
      <div class="w-100 flex mt-20 slid-up-animation-3">
        <div class="w-100 flex">
          <BaseSkeleton width="120px" height="120px" radius="50%" />
          <div class="flex flex-column justify-center px-15">
            <BaseSkeleton width="120px" height="20px" />
            <BaseSkeleton width="150px" height="20px" class="mt-8" />
            <BaseSkeleton width="60px" height="20px" class="mt-8" />
            <BaseSkeleton width="100px" height="20px" class="mt-8" />
          </div>
        </div>
      </div>
      <BaseSkeleton width="100%" height="70px" class="mt-15" />
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
        class="slid-up-animation-1s bg-secondary-gray border-rounded border-info py-10 px-2 mt-15 flex flex-wrap"
      >
        <span
          class="f-s-12 f-w-500 mt-5 px-10 bg-info color-primary mx-5 py-8 border-rounded"
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

const loading = ref(true);

const dataSource = computed(() => {
  return ViewProfileStoreModule.targetUserProfile.value;
});

onMounted(async () => {
  loading.value = true;
  await ViewProfileControllerModule.viewProfile(route.params.id);
  loading.value = false;
});
</script>
