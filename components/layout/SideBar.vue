<template>
  <div
    class="sidebar-style bg-primary-white"
    :class="{
      'w-300-px': sidebarState === 'open',
      'w-60-px': sidebarState == 'close',
    }"
  ></div>
</template>

<script setup>
import { sidebarStoreModule } from "@/stores/sidebarModule";

const sidebarList = computed(() => {
  return sidebarStoreModule.sidebarList.value;
});

const sidebarState = computed(() => {
  return sidebarStoreModule.sidebarState.value;
});
</script>

<style scoped>
.sidebar-style {
  height: 97dvh;
  border: 1px solid #d1cdcd53;
  border-radius: 10px;
  margin: 0 15px;
}
</style>
