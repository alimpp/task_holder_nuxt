<template>
  <div
    class="base-avatar"
    :class="[bgClass]"
    :style="{ 'min-width': width, 'min-height': height }"
  >
    <span class="color-primary-white f-s-20 f-w-600">{{ character }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "45px",
  },
  height: {
    type: String,
    default: "45px",
  },
  character: {
    type: String,
    default: "A",
  },
  bgClass: {
    type: String,
    default: "bg-primary",
  },
});
</script>

<style scoped>
.base-avatar {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
