<template>
  <div class="mobile-sidebar-content" v-if="sidebarState == 'open'">
    <div class="mobile-sidebar-style bg-primary-white slid-right-animation-8">
      <div class="w-100 flex justify-end">
        <IconsClose class="cursor-pointer" @click="handleChangeSidebarState" />
      </div>
      <div class="w-100 flex align-center bg-info py-5 border-rounded">
        <div class="flex flex-column px-10" v-if="sidebarState == 'open'">
          <span class="f-s-12 f-w-600 color-primary">Task Holder</span>
          <span class="f-s-10 f-w-500 color-gray pt-5"
            >Project and task management</span
          >
        </div>
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

const handleChangeSidebarState = () => {
  sidebarStoreModule.handleChangeSidebarState();
};
</script>

<style scoped>
.mobile-sidebar-content {
  width: 100%;
  height: 100dvh;
  position: fixed;
  z-index: 100;
  background: #00000060;
}
.mobile-sidebar-style {
  width: 250px;
  height: 100dvh;
  border: 1px solid #d1cdcd53;
  border-radius: 10px;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
}
</style>
