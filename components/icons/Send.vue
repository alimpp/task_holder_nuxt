<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 24 24"><path fill="none" :stroke="color" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 10l-3 3m9.288-9.969a.535.535 0 0 1 .68.681l-5.924 16.93a.535.535 0 0 1-.994.04l-3.219-7.242a.54.54 0 0 0-.271-.271l-7.242-3.22a.535.535 0 0 1 .04-.993z"/></svg>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "#000",
  },
  width: {
    type: String,
    default: "30",
  },
  height: {
    type: String,
    default: "30",
  },
});
</script>
