<template>
  <div class="w-100 flex flex-column">
    <div class="w-100 flex flex-column">
      <div class="flex mt-10 flex-wrap">
        <BaseButton
          name="Loading Button Test"
          bg="bg-primary"
          color="color-primary-white"
          padding="12px 15px"
          :loading="loadingButton"
          @click="handleLoading"
          class="mx-2"
        />
        <BaseButton
          name="Loading Button Test"
          bg="bg-secondary"
          color="color-primary-white"
          padding="12px 15px"
          :loading="loadingButton"
          @click="handleLoading"
          class="mx-2"
        /><BaseButton
          name="Loading Button Test"
          bg="bg-warning"
          color="color-dark"
          loading-color="#000"
          padding="12px 15px"
          :loading="loadingButton"
          @click="handleLoading"
          class="mx-2"
        /><BaseButton
          name="Loading Button Test"
          bg="bg-success"
          color="color-primary-white"
          padding="12px 15px"
          :loading="loadingButton"
          @click="handleLoading"
          class="mx-2"
        /><BaseButton
          name="Loading Button Test"
          bg="bg-success-low"
          color="color-primary-white"
          padding="12px 15px"
          :loading="loadingButton"
          @click="handleLoading"
          class="mx-2"
        /><BaseButton
          name="Loading Button Test"
          bg="bg-red"
          color="color-primary-white"
          padding="12px 15px"
          :loading="loadingButton"
          @click="handleLoading"
          class="mx-2"
        />
        <BaseButton
          name="Loading Button Test"
          bg="bg-danger"
          color="color-primary-white"
          padding="12px 15px"
          :loading="loadingButton"
          @click="handleLoading"
          class="mx-2"
        />
      </div>
      <div class="flex mt-10">
        <BaseButton
          name="Loading page"
          bg="bg-secondary"
          color="color-primary-white"
          padding="12px 15px"
          class="mx-2"
          @click="pageLoading"
        />
      </div>
      <div class="flex mt-10">
        <BaseButton
          name="warning toast"
          bg="bg-warning"
          color="color-primary-white"
          padding="12px 15px"
          @click="
            addToast({
              title: 'warning toast',
              text: 'warning toast for test',
              type: 'warning',
              id: '1',
              timeout: 5000,
            })
          "
          class="mx-2"
        />
        <BaseButton
          name="success toast"
          bg="bg-success"
          color="color-primary-white"
          padding="12px 15px"
          @click="
            addToast({
              title: 'success toast',
              text: 'success toast for test',
              type: 'success',
              id: '2',
              timeout: 5000,
            })
          "
          class="mx-2"
        />
        <BaseButton
          name="danger toast"
          bg="bg-danger"
          color="color-primary-white"
          padding="12px 15px"
          @click="
            addToast({
              title: 'danger toast',
              text: 'danger toast for test',
              type: 'danger',
              id: '3',
              timeout: 5000,
            })
          "
          class="mx-2"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { baseAppStoreModule } from "@/stores/baseApp";

const loadingButton = ref(false);

const handleLoading = () => {
  loadingButton.value = !loadingButton.value;
  setTimeout(() => {
    loadingButton.value = !loadingButton.value;
  }, 3000);
};

const pageLoading = () => {
  baseAppStoreModule.loading.value = !baseAppStoreModule.loading.value;
  setTimeout(() => {
    baseAppStoreModule.loading.value = !baseAppStoreModule.loading.value;
  }, 3000);
};

const addToast = (toast) => {
  baseAppStoreModule.createToast(toast);
};
</script>
