<template>
  <div class="flex flex-column w-100">
    <div
      class="slid-up-animation-5 flex flex-column justify-center align-center w--100"
    >
      <span class="color-primary f-s-18 f-w-600">Login From Taskholder</span>
      <span class="color-gray f-s-10 f-w-500 pt-5"
        >Sign In With Email And Password</span
      >
    </div>
    <BaseInput
      class="mt-10 slid-up-animation-5 fade-animation"
      width="365px"
      label="Email"
      placeholder="Enter your email"
    />
    <BaseInput
      class="mt-10 slid-up-animation-5 fade-animation"
      width="365px"
      label="Password"
      placeholder="Password your email"
    />
    <BaseButton
      width="100%"
      name="Login"
      class="mt-10 fade-animation"
      height="40px"
    />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
</script>
