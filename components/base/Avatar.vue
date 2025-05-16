<template>
  <div
    class="base-avatar"
    :class="[bgClass]"
    :style="{ 'min-width': width, 'min-height': height, background: bg }"
  >
    <span class="color-primary-white" :class="[characterSize]">{{
      character
    }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "35px",
  },
  height: {
    type: String,
    default: "35px",
  },
  character: {
    type: String,
    default: "A",
  },
  bgClass: {
    type: String,
    default: "bg-primary",
  },
  bg: {
    type: String,
    default: "",
  },
  characterSize: {
    type: String,
    default: "f-s-20",
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
