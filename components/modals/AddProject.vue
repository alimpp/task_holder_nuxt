<template>
  <BaseModal
    width="380px"
    title="Create Project"
    text="you can create project for tasks"
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
          :errorMessage="errorMessage.title"
          label="Project Name"
          class="w-355-px mt-5"
          v-model="form.name"
        />
        <BaseTextarea
          :errorMessage="errorMessage.description"
          label="Project Description"
          class="w-355-px mt-5"
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
        @click="createProject"
      >
        <template #iconLeft>
          <IconsSpinner v-if="addProjectLoading" color="#7d7be5" />
          <IconsCheckCircle color="#7d7be5" class="mx-2" v-else />
        </template>
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup>
import { ProjectControllerModule } from "~/controllers/project";
import { UploadControllerModule } from "~/controllers/upload";
const emit = defineEmits(["close"]);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
});

const targetImage = ref(null);
const addProjectLoading = ref(false);
const loadingUpload = ref(false);

const form = ref({
  description: "",
  name: "",
  avatar: ""
});

const errorMessage = computed(() => {
  return ProjectControllerModule.errorMessage.value;
});

const uploadImage = async (event) => {
  loadingUpload.value = true;
  const response = await UploadControllerModule.uploadFile(
    event.target.files[0]
  );
  targetImage.value = await UploadControllerModule.downloadFileById(
    response.id
  );
  form.value.avatar = response.id;
  loadingUpload.value = false;
};

const createProject = async () => {
 
};
</script>
