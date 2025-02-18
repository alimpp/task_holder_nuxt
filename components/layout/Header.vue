<template>
  <div class="layout-header-style bg-primary-white">
    <IconsHamburgerMenu
      class="cursor-pointer"
      @click="handleChangeSidebarState"
    />
  </div>
</template>

<script setup>
import { sidebarStoreModule } from "~/stores/sidebarModule";

const handleChangeSidebarState = () => {
  sidebarStoreModule.handleChangeSidebarState();
};
</script>

<style scoped>
.layout-header-style {
  width: 95%;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: 1px solid #d1cdcd53;
  padding: 0 10px;
}
</style>
