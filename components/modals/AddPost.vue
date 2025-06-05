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
        <span v-if="errorMessage.imageId" class="color-danger f-s-12 f-w-500">
          {{ errorMessage.imageId }}
        </span>
        <BaseInput
          :errorMessage="errorMessage.title"
          label="Title"
          class="w-355-px mt-5"
          v-model="form.title"
        />
        <BaseTextarea
          :errorMessage="errorMessage.description"
          label="Description"
          class="w-355-px"
          v-model="form.description"
        />
      </div>
    </template>

    <template #footer>
      <BaseButton
        bg="bg-info"
        name="Submit Post"
        width="100%"
        color="color-primary"
        @click="addPost"
      >
        <template #iconLeft>
          <IconsSpinner v-if="addPostLoading" color="#7d7be5" />
          <IconsCheckCircle color="#7d7be5" class="mx-2" v-else />
        </template>
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup>
import { PostsControllerModule } from "~/controllers/posts";

import { UploadControllerModule } from "~/controllers/upload";
const emit = defineEmits(["close"]);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
});

const targetImage = ref(null);
const addPostLoading = ref(false);
const loadingUpload = ref(false);

const form = ref({
  description: "",
  title: "",
  imageId: "",
});

const errorMessage = computed(() => {
  return PostsControllerModule.errorMessage.value;
});

const uploadImage = async (event) => {
  loadingUpload.value = true;
  const response = await UploadControllerModule.uploadFile(
    event.target.files[0]
  );
  targetImage.value = await UploadControllerModule.downloadFileById(
    response.id
  );
  form.value.imageId = response.id;
  loadingUpload.value = false;
};

const addPost = async () => {
  addPostLoading.value = true;
  await PostsControllerModule.validateAddPost(form.value);
  addPostLoading.value = false;

  form.value = {
    description: "",
    title: "",
    imageId: "",
  };
  emit("close");
};
</script>
