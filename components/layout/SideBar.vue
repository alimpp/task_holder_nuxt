<template>
  <div
    class="sidebar-style bg-secondary"
    :class="{
      'w-200-px': sidebarState === 'open',
      'w-40-px': sidebarState == 'close',
    }"
  >
    <div class="w-100 flex align-center bg-info py-2 border-rounded">
      <img src="/public/image/logo/logo.png" width="40" />
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
        <div
          class="flex align-center w-70 px-5"
          :class="{ 'justify-center': sidebarState == 'close' }"
        >
          <img :src="item.icon" alt="icon" width="20" />
          <span
            class="f-s-14 f-w-600 color-primary px-2"
            v-if="sidebarState === 'open'"
            >{{ item.name }}</span
          >
        </div>
        <div class="w-30 flex justify-end" v-if="sidebarState === 'open'">
          <IconsArrowDown v-if="item.isOpen" />
          <IconsArrowUp v-else />
        </div>
      </div>
      <div
        class="flex flex-column w-100 fade-animation"
        v-if="item.isOpen && sidebarState === 'open'"
      >
        <div
          class="flex align-center w-100 py-5 mt-5 border-rounded"
          v-for="(child, index) in item.childs"
          :key="index"
          @click="navigateTo(child.path)"
          :class="{ 'bg-primary': route.path == child.path }"
        >
          <IconsCheckCircle class="mx-2" v-if="route.path == child.path" />
          <span
            class="f-s-14 f-w-600 color-primary-white"
            :class="{ 'color-primary-white': route.path == child.path, 'px-28': route.path != child.path }"
            >{{ child.name }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { sidebarStoreModule } from "@/stores/sidebarModule";

const route = useRoute();

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
