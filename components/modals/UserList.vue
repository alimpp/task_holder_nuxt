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
      <IconsFriendAdd class="mx-7" />
    </template>

    <template #content>
      <div class="flex flex-column w-100 h-50-dvh content">
        <div
          v-for="(item, index) in userList"
          :key="index"
          :style="{ 'background-color': item.avatarColor }"
          class="flex my-2"
        >
          <span>{{ "ID" + ":" + " " + item.id }}</span> /
          <span>{{ "Full name" + ":" + " " + item.fullname }}</span> /
          <span>{{ "Email" + ":" + " " + item.email }}</span> /
          <span>{{ "bio" + ":" + " " + item.bio }}</span> /
          <span>{{ "first char" + ":" + " " + item.fristChar }}</span>
        </div>
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
