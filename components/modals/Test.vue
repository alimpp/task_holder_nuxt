<template>
  <BaseConfrim
    title="Create New User"
    text="Create User For Test Modal"
    :isOpen="isOpen"
    @close="emit('close')"
  >
    <template #icon>
      <IconsSuccess color="#7d7be5" />
    </template>
    <template #footer>
      <BaseButton
        name="add user"
        bg="bg-primary"
        color="color-primary-white"
        width="80px"
        height="35px"
      />
    </template>
  </BaseConfrim>
</template>

<script setup>
const emit = defineEmits(["close"]);

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>
