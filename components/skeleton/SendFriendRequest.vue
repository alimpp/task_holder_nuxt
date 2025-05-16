<template>
  <BaseCard class="mt-10 fade-animation" bgClass="bg-primary-white">
    <div class="w-100 flex">
      <div class="flex w-70">
        <BaseSkeleton width="35px" height="35px" radius="50%" />
        <div class="flex flex-column justify-center px-5">
          <BaseSkeleton width="100px" height="15px" />
          <BaseSkeleton class="mt-4" width="130px" height="15px" />
        </div>
      </div>
      <div class="w-30 flex align-center justify-end">
        <BaseSkeleton width="50px" height="35px" />
      </div>
    </div>
  </BaseCard>
</template>
