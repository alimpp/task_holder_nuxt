<template>
  <div class="auth-layout w-100">
    <img
      src="/public/image/auth/auth-bg.jpeg"
      alt="image"
      class="w-100 h-100-dvh"
    />
    <div class="glass-effect">
      <div class="content border-rounded"><slot /></div>
    </div>
  </div>
</template>

<style scoped>
.auth-layout {
  display: flex;
}
.glass-effect {
  width: 100%;
  height: 100dvh;
  position: fixed;
  z-index: 100;
  background: #ffffff8f;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 380px;
  background: #fff;
  border: 1px solid #d1cdcd53;
}
</style>
