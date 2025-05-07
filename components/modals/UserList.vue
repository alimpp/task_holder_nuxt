<template>
  <BaseModal
    width="380px"
    title="Add Your Friends"
    text="you can add people you know"
    :isOpen="state"
    @close="emit('close')"
    borderRadius="10px"
    :hasFooter="false"
  >
    <template #icon>
      <BaseIconContent bgClass="bg-info">
        <IconsFriendAdd color="#7d7be5" />
      </BaseIconContent>
    </template>

    <template #content>
      <div class="flex flex-column w-100 h-50-dvh content px-5">
        <CardsFriendRequest v-for="(item, index) in userList" :key="index" :user="item" />
        <!-- <BaseCard class="mt-10" v-for="(item, index) in userList" :key="index">
          <div class="w-100 flex">
            <div class="flex w-70">
              <BaseAvatar :character="item.fristChar" :bg="item.avatarColor" />
              <div class="flex flex-column justify-center px-5">
                <span class="f-s-14 f-w-500">{{ item.fullname }}</span>
                <span class="f-s-12 f-w-500 color-gray">{{ item.email }}</span>
              </div>
            </div>
            <div class="w-30 flex align-center">
              <BaseButton
                width="100%"
                name="Request"
                bg="bg-info"
                color="color-primary"
                @click="handleSendRequest(item.id)"
              >
                <template #iconLeft>
                  <IconsFriendAdd color="#7d7be5" class="mx-4" width="18px" />
                </template>
              </BaseButton>
            </div>
          </div>
        </BaseCard> -->
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
import { UsersStoreModule } from "~/stores/users";
import { RequestControllerModule } from "~/controllers/request";
const emit = defineEmits(["close"]);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
});

const userList = computed(() => {
  return UsersStoreModule.userlist.value;
});

const handleSendRequest = (id) => {
  RequestControllerModule.sendRequest(id);
};
</script>

<style scoped>
.content {
  overflow-y: scroll;
}
.content::-webkit-scrollbar {
  display: none;
}
.content {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
