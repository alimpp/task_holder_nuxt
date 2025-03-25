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
      label="Frsitname"
      placeholder="Enter your Frsitname"
      :errorMessage="errorMessage.frsitname"
      v-model="form.frsitname"
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
    <BaseInput
      class="mt-10 slid-up-animation-5 fade-animation"
      width="365px"
      label="Confrim Password"
      placeholder="Enter your confrim password"
      :errorMessage="errorMessage.confrimPassword"
      v-model="form.confrimPassword"
    />
    <div class="flex align-center w-100 mt-10">
      <BaseButton
        width="150px"
        name="Register"
        class="fade-animation"
        height="40px"
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
import { RegisterStoreModule } from "@/stores/register";

definePageMeta({
  layout: "auth",
});

const form = ref({
  frsitname: "",
  lastname: "",
  email: "",
  password: "",
  confrimPassword: "",
});

const errorMessage = computed(() => {
  return RegisterStoreModule.inputError.value;
});

const register = async () => {
  await RegisterStoreModule.validateInput(form.value);
};
</script>
