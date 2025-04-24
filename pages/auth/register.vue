<template>
  <div class="flex flex-column w-100">
    <div
      class="slid-up-animation-5 flex flex-column justify-center align-center w--100"
    >
      <span class="color-primary f-s-18 f-w-600">Register With Taskholder</span>
      <span class="color-gray f-s-10 f-w-500 pt-5"
        >Create Profile In Taskholder</span
      >
    </div>
    <BaseInput
      class="mt-10 slid-up-animation-5 fade-animation"
      width="365px"
      label="fristname"
      placeholder="Enter your fristname"
      :errorMessage="errorMessage.fristname"
      v-model="form.fristname"
    />
    <BaseInput
      class="mt-10 slid-up-animation-5 fade-animation"
      width="365px"
      label="Lastname"
      placeholder="Enter your Lastname"
      :errorMessage="errorMessage.lastname"
      v-model="form.lastname"
    />
    <BaseInput
      class="mt-10 slid-up-animation-5 fade-animation"
      width="365px"
      label="Email"
      placeholder="Enter your email"
      :errorMessage="errorMessage.email"
      v-model="form.email"
    />
    <BaseInput
      class="mt-10 slid-up-animation-5 fade-animation"
      width="365px"
      label="Password"
      placeholder="Enter your password"
      :errorMessage="errorMessage.password"
      v-model="form.password"
    />
    <div class="flex align-center w-100 mt-10">
      <BaseButton
        width="150px"
        name="Register"
        class="fade-animation"
        height="40px"
        :loading="loading"
        @click="register"
      />
      <span
        @click="navigateTo('/auth/login')"
        class="f-s-13 f-w-500 color-primary cursor-pointer px-50"
        >Do you have account?</span
      >
    </div>
  </div>
</template>

<script setup>
import { RegisterControllerModule } from "@/controllers/register";

definePageMeta({
  layout: "auth",
});

const loading = ref(false);

const form = ref({
  fristname: "",
  lastname: "",
  email: "",
  password: "",
});

const errorMessage = computed(() => {
  return RegisterControllerModule.inputError.value;
});

const register = async () => {
  loading.value = true;
  await RegisterControllerModule.validateInput(form.value);
  loading.value = false;
};
</script>
