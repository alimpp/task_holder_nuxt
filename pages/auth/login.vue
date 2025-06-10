<template>
  <div class="flex flex-column w-100">
    <div
      class="slid-up-animation-5 flex flex-column justify-center align-center w--100"
    >
      <span class="color-primary f-s-18 f-w-600">Login With Taskholder</span>
      <span class="color-gray f-s-10 f-w-500 pt-5"
        >Sign In With Email And Password</span
      >
    </div>
    <BaseInput
      class="mt-10 slid-up-animation-5 fade-animation"
      label="Email"
      placeholder="Enter your email"
      :errorMessage="errorMessage.email"
      v-model="form.email"
    />
    <BaseInput
      class="mt-10 slid-up-animation-5 fade-animation"
      label="Password"
      placeholder="Enter your Password"
      :errorMessage="errorMessage.password"
      v-model="form.password"
    />
    <div class="flex align-center w-100 mt-10">
      <BaseButton
        width="150px"
        name="Login"
        class="fade-animation"
        height="40px"
        :loading="loading"
        @click="login"
      />
      <span
        @click="navigateTo('/auth/register')"
        class="f-s-13 f-w-500 color-primary cursor-pointer px-29"
        >Do you not have an account?</span
      >
    </div>
  </div>
  <BaseConfrim
    :isOpen="confrimModalState"
    type="error"
    title="401 Unauthorized"
    text="You are not authorized to access this page"
  >
    <template #footer>
      <BaseButton
        bg="bg-none"
        name="Try Again"
        border="1px solid #fff"
        fontWight="f-w-400"
        @click="tryAgain"
      ></BaseButton>
    </template>
  </BaseConfrim>
</template>

<script setup>
import { LoginControllerModule } from "@/controllers/login";
import { LoginStoreModule } from "~/stores/login";

definePageMeta({
  layout: "auth",
});

const loading = ref(false);
const confrimModalState = computed(() => {
  return LoginStoreModule.confrimModalState.value;
});

const form = ref({
  email: "",
  password: "",
});

const errorMessage = computed(() => {
  return LoginControllerModule.inputError.value;
});

const login = async () => {
  loading.value = true;
  await LoginControllerModule.validateInput(form.value);
  loading.value = false;
};

const tryAgain = () => {
  LoginStoreModule.confrimModalState.value = false;
};
</script>
