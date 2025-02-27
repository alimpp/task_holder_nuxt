<template>
  <div class="base-toast-bar-content">
    <BaseToast
      v-for="(toast, index) in toastMessages"
      :key="index"
      :toast="toast"
      @remove="remove"
    />
  </div>
</template>

<script setup>
import { baseAppStoreModule } from "~/stores/baseApp";

const toastMessages = computed(() => {
  return baseAppStoreModule.toastMessages.value;
});

const remove = (id) => {
  baseAppStoreModule.removeToast(id);
};
</script>

<style scoped>
.base-toast-bar-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 390px;
  height: auto;
  position: fixed;
  bottom: 0;
  right: 0;
  overflow: hidden;
}

@media (max-width: 600px) {
  .base-toast-bar-content {
    width: 100%;
  }
}
</style>
