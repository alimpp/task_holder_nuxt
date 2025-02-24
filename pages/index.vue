<template>
  <div class="w-100 flex flex-column">
    <div class="w-100 flex flex-column">
      <div class="flex mt-10">
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
          color="color-primary-white"
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
    </div>
  </div>
</template>

<script setup>
const loadingButton = ref(false);

const handleLoading = () => {
  loadingButton.value = !loadingButton.value;
  setTimeout(() => {
    loadingButton.value = !loadingButton.value;
  }, 3000);
};
</script>
