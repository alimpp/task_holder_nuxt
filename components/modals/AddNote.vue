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
        <BaseInput
          :errorMessage="errorMessage.note"
          label="Note Content"
          class="w-355-px"
          v-model="userNote"
        />
      </div>
    </template>

    <template #footer>
      <BaseButton
        bg="bg-info"
        name="Submit Note"
        width="100%"
        color="color-primary"
        @click="handleAddNote"
      >
        <template #iconLeft>
          <IconsSpinner v-if="addNoteLoading" color="#7d7be5" />
          <IconsCheckCircle color="#7d7be5" class="mx-2" v-else />
        </template>
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup>
import { ref } from "vue";
import { NotesControllerModule } from "~/controllers/notes";
const emit = defineEmits(["close"]);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
});

const userNote = ref("");
const addNoteLoading = ref(false);

const errorMessage = computed(() => {
  return NotesControllerModule.inputError.value;
});

const handleAddNote = async () => {
  addNoteLoading.value = true;
  await NotesControllerModule.validateAddNote(userNote.value);
  addNoteLoading.value = false;
  if (errorMessage.value.note === "") {
    emit("close");
    userNote.value = "";
  }
};
</script>
