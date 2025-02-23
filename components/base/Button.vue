<template>
  <button
    class="base-button"
    :style="{padding: `${padding}`, border: `${border}` }"
    :class="[bg]"
    :disabled="disabled"
  > 
    <div v-if="loading">
      loading...
    </div>
    <div class="flex align-center" v-else>
      <slot name="iconRight"></slot>
      <span :class="[fontSize, fontWight, color]"> {{ name }}</span>
      <slot name="iconLeft"></slot>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  bg: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
  fontSize: {
    type: String,
    default: "f-s-14",
  },
  fontWight: {
    type: String,
    default: "f-w-500",
  },
  name: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  border: {
    type: String,
    default: "",
  },
  padding: {
    type: String,
    default: "5px 10px",
  },
});
</script>

<style scoped>
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
}
</style>
