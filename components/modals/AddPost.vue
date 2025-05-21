<template>
  <BaseModal
    width="380px"
    title="Add Post"
    text="you can add post for timeline"
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
      <div class="flex flex-column w-100 py-10">
        <BaseUploadImage 
          @uploadImage="uploadImage" 
          :image="targetImage" 
          :loading="loadingUpload"
        />
        <BaseInput
          label="Title"
          class="w-355-px mt-5"
        />
        <BaseTextarea label="Description" class="w-355-px" />
      </div>
    </template>

    <template #footer>
      <BaseButton
        bg="bg-info"
        name="Submit Post"
        width="100%"
        color="color-primary"
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
import { UploadControllerModule } from "~/controllers/upload";
const emit = defineEmits(["close"]);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
});

const targetImage = ref(null)
const addNoteLoading = ref(false);
const loadingUpload = ref(false);

const errorMessage = computed(() => {
  return ;
});

const uploadImage = async (event) => {
  loadingUpload.value = true;
  const response = await UploadControllerModule.uploadFile(event.target.files[0]);
  targetImage.value = await UploadControllerModule.downloadFileById(response.id);
  loadingUpload.value = false;
}
</script>
