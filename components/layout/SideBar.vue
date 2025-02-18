<template>
  <div
    class="sidebar-style bg-primary-white"
    :class="{
      'w-200-px': sidebarState === 'open',
      'w-40-px': sidebarState == 'close',
    }"
  >
    <div class="w-100 flex align-center bg-info py-2 border-rounded">
      <IconsLogo />
      <div class="flex flex-column" v-if="sidebarState == 'open'">
        <span class="f-s-12 f-w-500 color-primary">Task Holder</span>
        <span class="f-s-10 f-w-500 color-gray pt-5"
          >Project and task management</span
        >
      </div>
    </div>
  </div>
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
  height: 95dvh;
  border: 1px solid #d1cdcd53;
  border-radius: 10px;
  margin: 0 15px;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
}
</style>
