<template>
  <BaseModal
    width="90%"
    height="90dvh"
    title="Add Your Friends"
    text="Add your favorite person or someone you intract with"
    :isOpen="state"
    @close="emit('close')"
    borderRadius="10px"
  >
    <template #icon>
      <div>
        <IconsFriendAdd class="px-7" />
      </div>
    </template>

    <template #content>
      <div class="flex flex-column w-100 h-70-dvh content">
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
        <div>this is content</div>
      </div>
    </template>

    <template #footer>
      <div class="flex w-100 justify-end ">
        <BaseButton name="submit" />
      </div>
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

<style scoped>
.content {
  overflow-y: scroll;
}
</style>
