<template>
  <BaseCard class="mt-10 fade-animation" bgClass="bg-primary-white">
    <div class="w-100 flex">
      <div class="flex w-70">
        <BaseAvatar :character="user.fristChar" :bg="user.avatarColor" :avatar="user.avatarUrl" />
        <div class="flex flex-column justify-center px-5">
          <span class="f-s-12 f-w-500">{{ user.fullname }}</span>
          <span class="f-s-10 f-w-500 color-gray">{{ user.email }}</span>
        </div>
      </div>
      <div class="w-30 flex align-center justify-end">
        <BaseButton
          width="50px"
          bg="bg-info"
          color="color-primary"
          @click="handleSendRequest(user.id)"
        >
          <template #iconLeft>
            <IconsSpinner color="#7d7be5" class="mx-4" v-if="loading" />
            <IconsFriendAdd color="#7d7be5" class="mx-4" width="18px" v-else />
          </template>
        </BaseButton>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { RequestControllerModule } from "~/controllers/request";

const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const loading = ref(false);

const handleSendRequest = async (id) => {
  loading.value = true;
  await RequestControllerModule.sendRequest(id);
  loading.value = false;
};
</script>
