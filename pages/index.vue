<template>
  <div class="w-100 flex flex-column">
    <span> {{ counterModule }}</span>
    <BaseButton
      name="increment"
      bg="bg-primary"
      color="color-primary-white"
      width="150px"
      @click="counterStoreModule.increment()"
      class="mx-2"
    />

    <BaseButton
      name="decrement"
      bg="bg-primary"
      color="color-primary-white"
      width="150px"
      @click="handleDecrement"
      class="mx-2 mt-4"
    />

    <div class="w-100 flex flex-column">
      <div class="flex mt-10 flex-wrap">
        <BaseButton
          name="Loading Button Test"
          bg="bg-primary"
          color="color-primary-white"
          width="150px"
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
          width="150px"
          class="mx-2"
          @click="pageLoading"
        />
      </div>
      <div class="flex mt-10">
        <BaseButton
          name="warning toast"
          bg="bg-warning"
          color="color-dark"
          width="120px"
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
          width="120px"
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
          width="120px"
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
      <div class="flex flex-column mt-10">
        <BaseInput
          placeholder="Default search in base input"
          label="label input for test"
          width="350px"
        />
        <BaseInput
          class="mt-5"
          placeholder="Default search in base input"
          label="With error input test"
          error-message="error message for test"
          width="350px"
        />
      </div>
      <div class="flex w-100 mt-10">
        <BaseChip
          bg="bg-success-low"
          color="color-success"
          name="base chip for test"
          width="120px"
          border="border-success"
        />
        <BaseChip
          bg="bg-danger"
          color="color-primary-white"
          name="base chip for test"
          width="120px"
          border="border-red"
          class="mx-5"
        />
        <BaseChip
          bg="bg-info"
          color="color-primary"
          name="base chip for test"
          width="120px"
          border="border-primary"
        />
      </div>
      <BaseButton
        name="Create User"
        bg="bg-secondary"
        color="color-primary-white"
        width="150px"
        class="mx-2 mt-10"
        @click="isOpen = true"
      />
      <BaseButton
        name="Create User"
        bg="bg-info"
        color="color-primary"
        width="150px"
        class="mx-2 mt-10"
        @click="isOpenDrawer = true"
      />
      <ModalsTest :isOpen="isOpen" @close="isOpen = false" />
      <DrawersTest :isOpen="isOpenDrawer" @close="isOpenDrawer = false" />
    </div>
  </div>
</template>

<script setup>
import { BaseAppStoreElementModule } from "@/stores/baseApp";
import { counterStoreModule } from "@/stores/counterModule";

const counterModule = computed(() => {
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
