<template>
  <BaseModal
    width="380px"
    title="Add Your Friends"
    text="Add your favorite person or someone you interact with"
    :isOpen="state"
    @close="emit('close')"
    borderRadius="10px"
    :hasFooter="false"
  >
    <template #icon>
      <IconsFriendAdd class="mx-7" />
    </template>

    <template #content>
      <div class="flex flex-column w-100 h-50-dvh content px-5">
        <BaseCard class="mt-10" v-for="(item, index) in userList" :key="index">
          <div class="w-100 flex">
            <div class="flex w-80">
              <BaseAvatar :character="item.fristChar" :bg="item.avatarColor" />
              <div class="flex flex-column justify-center px-5">
                <span class="f-s-14 f-w-500">{{ item.fullname }}</span>
                <span class="f-s-12 f-w-500 color-gray">{{ item.email }}</span>
              </div>
            </div>
            <div class="w-20 flex align-center">
              <BaseButton name="Request"></BaseButton>
            </div>
          </div>
        </BaseCard>
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
import { UsersStoreModule } from "~/stores/users";
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
