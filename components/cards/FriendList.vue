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
      <div class="w-30 flex align-center justify-end"></div>
    </div>
  </BaseCard>
</template>

<script setup>
import { FriendsControllerModule } from "~/controllers/friends";

const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const removeLoading = ref(false);
const handleRemoveFriend = async (id) => {
  removeLoading.value = true;
  await FriendsControllerModule.removeFriend(id);
  removeLoading.value = false;
};
</script>
