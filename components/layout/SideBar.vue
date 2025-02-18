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

    <div
      class="flex flex-column border-bottom w-100 mt-5 py-10 cursor-pointer"
      v-for="(item, index) in sidebarList"
      :key="index"
    >
      <div class="flex w-100" @click="item.isOpen = !item.isOpen">
        <div class="flex align-center w-70 px-5">
          <span class="f-s-16 f-w-600 color-primary">{{ item.name }}</span>
        </div>
        <div class="w-30 flex justify-end">
          <IconsArrowDown v-if="item.isOpen" />
          <IconsArrowUp v-else />
        </div>
      </div>
      <div
        class="flex flex-column w-100 px-15 fade_animations"
        v-if="item.isOpen"
      >
        <div
          class="flex w-100 py-5"
          v-for="(child, index) in item.childs"
          :key="index"
        >
          <span class="f-s-14 f-w-600 color-gray">{{ child.name }}</span>
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

.border-bottom {
  border-bottom: 1px solid #d1cdcd53;
}
</style>
