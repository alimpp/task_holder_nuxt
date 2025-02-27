<template>
  <div class="container">
    <span class="label">
      {{ label }}
    </span>
    <input
      :style="{
        height: `${height}`,
        width: `${width}`,
      }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :class="{
        error: error,
        'bg-white': isThemeLight,
        'color-primary-white': !isThemeLight,
      }"
      :disabled="disabled"
      :placeholder="placeholder"
    />
    <span v-if="error" class="color-danger errorMessage">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
    required: false,
  },
  label: {
    type: String,
    default: "",
    required: false,
  },
  type: {
    type: String,
    default: "",
    required: false,
  },
  error: {
    type: Boolean,
    default: false,
    required: false,
  },
  errorMessage: {
    type: String,
    default: "",
    required: false,
  },
  modelValue: {
    type: String,
    default: "",
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
  height: {
    type: String,
    default: "40px",
  },
  width: {
    type: String,
    default: "100%",
  },
});

const isThemeLight = ref(true);
</script>

<style scoped lang="scss">
input {
  padding: 0 7px;
  outline: none;
  border: 1px solid #8481812f;
  border-radius: 6px;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.error {
  border: 2px solid #f50000;
  color: #f50000;
}
.label {
  font-size: 14px;
  font-weight: 600;
  padding-left: 8px;
  padding-right: 8px;
}
.errorMessage {
  font-size: 12px;
  font-weight: 600;
  padding-left: 8px;
  padding-right: 8px;
}
</style>
