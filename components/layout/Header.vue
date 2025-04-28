<template>
  <div class="layout-header-style bg-primary-white">
    <div
      class="w-70 flex cursor-pointer align-center"
      @click="navigateTo('/profile/userProfile')"
    >
      <BaseAvatar :character="user.fristChar" />
      <div class="flex flex-column justify-center px-5">
        <span class="f-s-14 f-w-600">{{ user.fullname }}</span>
        <span class="f-s-12 f-w-500 color-gray">{{ user.email }}</span>
      </div>
    </div>
    <div class="w-30 flex justify-end align-center">
      <IconsLogOut color="#000" @click="logOut" class="cursor-pointer" />
      <div class="flex align-center mx-5">
        <IconsFriends
          class="cursor-pointer"
          @click="handleUserListModalState"
        />
      </div>
      <IconsHamburgerMenu
        @click="handleChangeSidebarState"
        class="cursor-pointer"
      />
    </div>
  </div>
  <ModalsUserList
    :state="userListModalState"
    @close="handleUserListModalState"
  />
</template>

<script setup>
import { UserStoreModule } from "~/stores/user";
import { sidebarStoreModule } from "~/stores/sidebarModule";

const handleChangeSidebarState = () => {
  sidebarStoreModule.handleChangeSidebarState();
};

const user = computed(() => {
  return UserStoreModule.user.value;
});

const userListModalState = ref(false);
const handleUserListModalState = () => {
  userListModalState.value = !userListModalState.value;
};

const logOut = () => {
  navigateTo("/auth/login");
  sidebarStoreModule.handleLogOut();
};
</script>

<style scoped>
.layout-header-style {
  width: 95%;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: 1px solid #d1cdcd53;
  padding: 0 10px;
}
@media (max-width: 800px) {
  .layout-header-style {
    width: 90%;
  }
}
</style>
