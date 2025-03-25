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
import { counterStoreModule } from "@/stores/counterModule";

const loading = computed(() => {
  return counterStoreModule.toastMessages.value;
});

const counter = computed(() => {
  return counterStoreModule.counter.value;
});

const increment = () => {
  counterStoreModule.increment();
};

const decrement = () => {
  counterStoreModule.decrement();
};
</script>
