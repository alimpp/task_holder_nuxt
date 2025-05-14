<template>
  <div class="w-100 flex flex-column pb-10">
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
        <div class="flex flex-column mt-5 w-100">
          <BaseInput
            label="Fristname"
            class="mt-4"
            v-model="user.fristname"
            width="98%"
            :errorMessage="errorMessage.fristname"
          />
          <BaseInput
            label="Lastname"
            class="mt-4"
            v-model="user.lastname"
            width="98%"
            :errorMessage="errorMessage.lastname"
          />
          <BaseInput
            label="Email"
            :disabled="true"
            class="mt-4"
            v-model="user.email"
            width="98%"
          />
          <BaseInput
            label="Bio"
            class="mt-4"
            width="98%"
            v-model="user.bio"
            :errorMessage="errorMessage.bio"
          />
          <BaseButton
            class="mt-10"
            bg="bg-info"
            color="color-primary"
            border="1px solid #7d7be5"
            width="99%"
            name="Update Profile"
            @click="udpateProfile"
          >
            <template #iconLeft>
              <IconsSpinner v-if="updateProfileLoading" color="#7d7be5" />
              <IconsPencile
                v-else
                class="mx-2"
                width="20px"
                height="20px"
                color="#7d7be5"
              />
            </template>
          </BaseButton>
        </div>
      </div>
      <div class="flex flex-column responsive-width mt-10">
        <span class="f-s-16 f-w-500 color-primary">Add Your Skills</span>
        <BaseInput
          label="Skill"
          width="97%"
          class="mt-10"
          v-model="skill"
          :errorMessage="inputSkillError"
        />
        <BaseButton
          class="bg-primary mt-10"
          width="99%"
          name="Add Skill"
          @click="addSkill"
        >
          <template #iconLeft>
            <IconsSpinner v-if="addSkillLoading" color="#fff" />
            <IconsPlus v-else class="mx-2" />
          </template>
        </BaseButton>
        <div class="w-100 flex flex-wrap mt-10">
          <BaseChip
            width="100px"
            class="mx-4 mt-4"
            v-for="(item, index) in skillsDataSource"
            :key="index"
            bg="bg-info"
            color="color-primary"
            :name="item.skill"
          >
            <template #iconLeft>
              <IconsClose
                class="mx-1 cursor-pointer"
                color="#7d7be5"
                @click="removeSkill(item.id)"
              />
            </template>
          </BaseChip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserControllerModule } from "~/controllers/user";
import { UserStoreModule } from "~/stores/user";

import { SkillsControllerModule } from "~/controllers/skills";
import { SkillsStoreModule } from "~/stores/skills";

const skill = ref("");
const updateProfileLoading = ref(false);
const addSkillLoading = ref(false);

const inputSkillError = computed(() => {
  return SkillsControllerModule.inputSkillError.value;
});

const user = computed(() => {
  return UserStoreModule.user.value;
});

const skillsDataSource = computed(() => {
  return SkillsStoreModule.skills.value;
});

definePageMeta({
  middleware: "auth",
});

const errorMessage = computed(() => {
  return UserControllerModule.inputError.value;
});

const udpateProfile = async () => {
  updateProfileLoading.value = true;
  const body = {
    fristname: user.value.fristname,
    lastname: user.value.lastname,
    bio: user.value.bio,
  };
  await UserControllerModule.validateUpdateProfile(body);
  updateProfileLoading.value = false;
};

const addSkill = async () => {
  addSkillLoading.value = true;
  const res = await SkillsControllerModule.validateSkill(skill.value);
  if (res) {
    skill.value = "";
  }
  addSkillLoading.value = false;
};

const removeSkill = async (id) => {
  await SkillsControllerModule.removeSkill(id);
};

onMounted(async () => {
  await SkillsControllerModule.getSkills();
});
</script>

<style scoped>
.responsive-container {
  display: flex;
}

.responsive-width {
  width: 50%;
  padding: 0 10px;
}

@media (max-width: 900px) {
  .responsive-container {
    flex-direction: column;
  }
  .responsive-width {
    width: 100%;
    padding: 0;
  }
}
</style>
