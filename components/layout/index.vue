<template>
  <div class="w-100 h-100-dvh default-layout-style bg-secondary-white">
    <div class="sidebar-content">
      <LayoutSideBar />
    </div>
    <div class="main-content px-10">
      <div class="header-content">
        <LayoutHeader />
      </div>
      <div class="router-content">
        <NuxtPage />
        <Compose 
          @createPost="createPost = true"
          @createProject="createProject = true"
          @addNote="addNote = true"
        />
      </div>
    </div>

    <LayoutMobileSidebar class="mobile-size" />
    <BasePageLoading v-if="pageLoading" />
    <BaseToastBar />
    <ModalsAddNote :state="addNote" @close="addNote = false" />
    <ModalsAddPost :state="createPost" @close="createPost = false" />
    <ModalsAddProject :state="createProject" @close="createProject = false" />
  </div>
</template>

<script setup>
import { BaseAppStoreElementModule } from "@/stores/baseApp";

const addNote = ref(false);
const createPost = ref(false);
const createProject = ref(false);

const pageLoading = computed(() => {
  return BaseAppStoreElementModule.loading.value;
});
</script>

<style scoped>
.default-layout-style {
  display: flex;
}
.main-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100dvh;
}

.header-content {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.router-content {
  height: 90dvh;
  overflow-y: scroll;
}

.router-content::-webkit-scrollbar {
  display: none;
}

.sidebar-content {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-size {
  display: none;
}

@media (max-width: 800px) {
  .sidebar-content {
    display: none;
  }
  .mobile-size {
    display: flex;
  }
}
</style>
