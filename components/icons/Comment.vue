<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 24 24"><path :fill="color" d="M12 2A10 10 0 0 0 2 12a9.9 9.9 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20"/></svg>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "#000",
  },
  width: {
    type: String,
    default: "22",
  },
  height: {
    type: String,
    default: "22",
  },
});
</script>
