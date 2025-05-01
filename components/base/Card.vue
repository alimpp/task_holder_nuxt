<template>
  <div class="border-rounded base-card px-5 py-5" :class="[bgClass]">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  bgClass: {
    type: String,
    default: "bg-secondary-white",
  },
});
</script>

<style scoped>
.base-card {
  box-shadow: 4px 2px 1px #7d7be515;
}
</style>
