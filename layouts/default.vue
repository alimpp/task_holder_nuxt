<template>
  <div class="w-100 h-100-dvh default-layout-style bg-secondary-white">
    <div class="sidebar-content">
      <LayoutSideBar />
    </div>
    <div class="main-content">
      <div class="header-content">
        <LayoutHeader />
      </div>
    </div>

    <LayoutMobileSidebar class="mobile-size" />
  </div>
</template>

<style scoped>
.default-layout-style {
  display: flex;
}
.main-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100dvh;
}

.header-content {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar-content {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-size {
  display: none;
}

@media (max-width: 800px) {
  .sidebar-content {
    display: none;
  }
  .mobile-size {
    display: flex;
  }
}
</style>
