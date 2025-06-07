<template>
  <div class="w-370-px flex">
    <div class="w-335-px flex px-5 mt-5">
      <BaseCard class="fade-animation" bgClass="bg-primary-white" px="0" py="0">
        <div class="w-100 flex flex-column">
          <div class="flex w-100 py-10 px-5">
            <BaseAvatar
              width="40px"
              height="40px"
              :character="post.author?.fristChar"
              :avatar="post.author?.avatarUrl"
              :bg="post.author?.avatarColor"
            />
            <div class="flex flex-column justify-center w-100 px-8">
              <span class="f-s-12 f-w-600">{{ post.author.fullname }}</span>
              <span class="f-s-12 color-gray pt-5">{{
                post.author.email
              }}</span>
            </div>
          </div>
          <img :src="post.image" alt="image" width="100%" height="200" />
          <div class="flex flex-column w-92 px-15 py-10 h-150-px">
            <span class="f-s-15 f-w-500 pt-15">{{ post.title }}</span>
            <span class="f-s-12 f-w-500 color-gray py-5">{{
              post.description
            }}</span>
          </div>
          <div
            class="flex justify-end px-10 align-center h-40-px border-top-gray mx-10"
          >
            <div
              class="flex mx-5 align-center cursor-pointer"
              @click="comments"
            >
              <IconsComment />
              <span class="f-s-12 f-w-600 pt-4">{{ post.commentsCount }}</span>
            </div>
            <div class="flex align-center cursor-pointer">
              <IconsHealth v-if="post.youLiked" />
              <IconsLike v-else />
              <span class="f-s-12 f-w-600 pt-4 px-2">{{ post.likesCount }}</span>
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["comments"]);

const props = defineProps({
  post: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const comments = () => {
  emit("comments", props.post);
};
</script>
