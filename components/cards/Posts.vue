<template>
  <div class="w-370-px flex">
    <div class="w-335-px flex px-5 mt-5">
      <BaseCard class="fade-animation" bgClass="bg-primary-white" px="0" py="0">
        <div class="w-100 flex flex-column">
          <img :src="post.image" alt="image" width="100%" height="200" />
         <div class="flex flex-column w-92 px-15 py-10">
          <div class="flex w-100">
            <BaseAvatar
              width="40px"
              height="40px"
              :character="post.author?.fristChar"
              :avatar="post.author?.avatarUrl"
              :bg="post.author?.avatarColor"
            />
            <div class="flex flex-column justify-center w-100 px-8">
              <span class="f-s-12 f-w-600">{{ post.author.fullname }}</span>
              <span class="f-s-12 color-gray pt-5">{{ post.author.email }}</span>
            </div>
          </div>
          <span class="f-s-15 f-w-500 pt-15">{{ post.title }}</span>
          <span class="f-s-12 f-w-500 color-gray py-5">{{ post.description }}</span>
         </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>
