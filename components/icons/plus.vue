<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g fill="none" :stroke="color" stroke-width="1.5">
      <circle cx="12" cy="12" r="10" />
      <path stroke-linecap="round" d="M15 12h-3m0 0H9m3 0V9m0 3v3" />
    </g>
  </svg>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "#fff",
  },
});
</script>
