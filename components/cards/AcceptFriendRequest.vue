<template>
  <BaseCard class="mt-10 fade-animation" bgClass="bg-primary-white">
    <div class="w-100 flex">
      <div class="flex w-70">
        <BaseAvatar :character="user.fristChar" :bg="user.avatarColor" :avatar="user.avatarUrl" />
        <div class="flex flex-column justify-center px-5">
          <span class="f-s-12 f-w-500">{{ user.fullname }}</span>
          <span class="f-s-10 w-500 color-gray">{{ user.email }}</span>
        </div>
      </div>
      <div class="w-30 flex align-center justify-end">
        <BaseButton
          width="50px"
          bg="bg-info"
          color="color-primary"
          class="mx-2"
          @click="
            handleAcceptRequest({
              requestId: user.requestId,
              friendRequestedBy: user.userId,
            })
          "
        >
          <template #iconLeft>
            <IconsSpinner color="#7d7be5" class="mx-4" v-if="acceptLoading" />
            <IconsCheckCircle color="#7d7be5" v-else />
          </template>
        </BaseButton>
        <BaseButton
          width="50px"
          bg="bg-red"
          color="color-primary-white"
          class="mx-2"
          @click="handleRejectRequest(user.requestId)"
        >
          <template #iconLeft>
            <IconsSpinner color="#7d7be5" class="mx-4" v-if="rejectLoading" />
            <IconsClose color="#fff" v-else />
          </template>
        </BaseButton>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { RequestControllerModule } from "~/controllers/request";
import { FriendsControllerModule } from "~/controllers/friends";

const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const rejectLoading = ref(false);
const handleRejectRequest = async (id) => {
  rejectLoading.value = true;
  await RequestControllerModule.removeRequest(id);
  rejectLoading.value = false;
};

const acceptLoading = ref(false);
const handleAcceptRequest = async (data) => {
  acceptLoading.value = true;
  await FriendsControllerModule.addFriend(data);
  acceptLoading.value = false;
};
</script>
