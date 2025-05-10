<template>
  <BaseCard class="mt-10 slid-up-animation-8" bgClass="bg-primary-white">
    <div class="w-100 flex">
      <div class="flex w-70">
        <BaseAvatar :character="user.fristChar" :bg="user.avatarColor" />
        <div class="flex flex-column justify-center px-5">
          <span class="f-s-14 f-w-500">{{ user.fullname }}</span>
          <span class="f-s-12 f-w-500 color-gray">{{ user.email }}</span>
        </div>
      </div>
      <div class="w-30 flex align-center justify-end">
        <BaseButton
          width="50px"
          bg="bg-red"
          color="color-primary-white"
          class="mx-2"
          @click="handleRemoveFriend(user.friendListId)"
        >
          <template #iconLeft>
            <IconsSpinner color="#7d7be5" class="mx-4" v-if="removeLoading" />
            <IconsClose color="#fff" v-else />
          </template>
        </BaseButton>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { FriendsControllerModule } from "~/controllers/friends";

const prosp = defineProps({
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
