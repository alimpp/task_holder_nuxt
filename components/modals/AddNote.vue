<template>
  <BaseModal
    width="380px"
    title="Add Note"
    text="you can add note for timeline"
    :isOpen="state"
    @close="emit('close')"
    borderRadius="10px"
    :hasFooter="true"
  >
    <template #icon>
      <BaseIconContent bgClass="bg-info">
        <IconsPencile color="#7d7be5" />
      </BaseIconContent>
    </template>

    <template #content>
      <div class="flex w-100 py-10">
        <BaseInput label="Note Content" class="w-355-px" />
      </div>
    </template>

    <template #footer>
      <BaseButton
        bg="bg-info"
        name="Submit Note"
        width="100%"
        color="color-primary"
      >
        <template #iconLeft>
          <IconsCheckCircle color="#7d7be5" class="mx-2" />
        </template>
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup>
const emit = defineEmits(["close"]);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
});
</script>
