<template>
  <div class="w-100 flex flex-column">
    {{ loading }}
    <span> {{ counter }}</span>
    <BaseButton
      name="increment"
      bg="bg-primary"
      color="color-primary-white"
      width="150px"
      @click="increment"
      class="mx-2"
    />

    <BaseButton
      name="decrement"
      bg="bg-primary"
      color="color-primary-white"
      width="150px"
      @click="decrement"
      class="mx-2 mt-4"
    />
  </div>
</template>

<script setup>
import { BaseAppStoreElementModule } from "@/stores/baseApp";
import { counterStoreModule } from "@/stores/counterModule";

const loading = computed(() => {
  return counterStoreModule.toastMessages.value;
});

const counter = computed(() => {
  return counterStoreModule.counter.value;
});

const loadingButton = ref(false);
const isOpen = ref(false);
const isOpenDrawer = ref(false);

const handleDecrement = () => {
  counterStoreModule.decrement();
};

const handleLoading = () => {
  loadingButton.value = !loadingButton.value;
  setTimeout(() => {
    loadingButton.value = !loadingButton.value;
  }, 3000);
};

const pageLoading = () => {
  BaseAppStoreElementModule.loading.value =
    !BaseAppStoreElementModule.loading.value;
  setTimeout(() => {
    BaseAppStoreElementModule.loading.value =
      !BaseAppStoreElementModule.loading.value;
  }, 3000);
};

const addToast = (toast) => {
  BaseAppStoreElementModule.createToast(toast);
};
</script>
