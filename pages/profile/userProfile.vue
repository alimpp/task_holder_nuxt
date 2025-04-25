<template>
  <div class="w-100 flex flex-column">
    <div class="w-100">
      <BaseBreadCrumbs />
    </div>
    <div class="w-100 responsive-container">
      <div
        class="flex flex-column align-center justify-center responsive-width mt-10"
      >
        <BaseAvatar
          :character="user.fristChar"
          width="150px"
          height="150px"
          characterSize="f-s-40"
        />
        <span class="f-s-16 f-w-600 py-5">{{ user.fullname }}</span>
        <span class="f-s-14 f-w-600 color-gray">{{ user.email }}</span>
      </div>
      <div class="flex flex-column responsive-width mt-10">
        <BaseInput
          label="Fristname"
          class="mt-4"
          v-model="user.fristname"
          width="98%"
        />
        <BaseInput
          label="Lastname"
          class="mt-4"
          v-model="user.lastname"
          width="98%"
        />
        <BaseInput
          label="Email"
          :disabled="true"
          class="mt-4"
          v-model="user.email"
          width="98%"
        />
        <BaseInput label="Job" class="mt-4" width="98%" />
        <BaseInput label="skills" class="mt-4" width="98%" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserStoreModule } from "~/stores/user";

const user = computed(() => {
  return UserStoreModule.user.value;
});
definePageMeta({
  middleware: "auth",
});
</script>

<style scoped>
.responsive-container {
  display: flex;
}

.responsive-width {
  width: 50%;
}

@media (max-width: 900px) {
  .responsive-container {
    flex-direction: column;
  }
  .responsive-width {
    width: 100%;
  }
}
</style>
