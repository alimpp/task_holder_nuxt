<template>
  <div class="w-100 flex flex-column">
    <div class="w-100">
      <BaseBreadCrumbs />
    </div>
    {{ dataSource }}
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

import { ViewProfileControllerModule } from "@/controllers/viewProfile";
import { ViewProfileStoreModule } from "@/stores/viewProfile";

const dataSource = computed(() => {
  return ViewProfileStoreModule.targetUserProfile.value;
});

onMounted(() => {
  ViewProfileControllerModule.viewProfile(route.params.id);
});
</script>
