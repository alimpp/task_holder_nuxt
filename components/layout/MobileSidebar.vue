<template>
  <div class="mobile-sidebar-content" v-if="sidebarState == 'open'">
    <div class="mobile-sidebar-style bg-primary-white slid-right-animation-8">
      <div class="w-100 flex justify-end">
        <IconsClose class="cursor-pointer" @click="handleChangeSidebarState" />
      </div>
      <div
        class="w-100 flex align-center bg-info py-5 border-rounded mt-5 mb-5"
      >
       <img src="/public/image/logo/logo.png" width="40" />
        <div class="flex flex-column px-10" v-if="sidebarState == 'open'">
          <span class="f-s-12 f-w-600 color-primary">Task Holder</span>
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
            @click="navigate(child.path)"
            :class="{ 'bg-primary': route.path == child.path }"
          >
            <IconsCheckCircle class="mx-2" v-if="route.path == child.path" />
            <span
              class="f-s-14 f-w-600 color-gray px-5"
              :class="{ 'color-primary-white': route.path == child.path, 'px-28': route.path != child.path }"
              >{{ child.name }}</span
            >
          </div>
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

const handleChangeSidebarState = () => {
  sidebarStoreModule.handleChangeSidebarState();
};

const navigate = (path) => {
  navigateTo(path);
  handleChangeSidebarState();
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
