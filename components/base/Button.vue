<template>
  <button
    class="app-button"
    :style="{ width: `${width}`, height: `${height}`, border: `${border}` }"
    :class="[background]"
    :disabled="disabled"
  >
    <div class="flex align-center">
      <slot name="iconRight"></slot>
      <span :class="[fontSize, fontWight, color]"> {{ name }} </span>
      <slot name="iconLeft"></slot>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
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
  background: {
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
  width: {
    type: String,
    default: "74px",
  },
  height: {
    type: String,
    default: "37px",
  },
  icon: {
    type: String,
    default: "",
  },
  border: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.app-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 37px;
  padding: 0px 15px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
