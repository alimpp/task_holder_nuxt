<template>
  <div class="w-100 flex flex-column">
    <div class="w-100">
      <BaseBreadCrumbs />
    </div>
    <div
      class="flex w-100 h-80-dvh align-cemter justify-center"
      v-if="!pageLoading && posts.length == 0"
    >
      <BaseEmptyState
        title="Posts Not Found"
        text="Posts list is empty please try again later"
      />
    </div>
    <div class="w-100 flex flex-wrap justify-center" v-if="pageLoading">
      <SkeletonPosts v-for="n in 20" class="mx-7 mt-10" />
    </div>
    <div class="w-100 flex flex-wrap justify-center py-20" v-if="!pageLoading">
      <CardsPosts
        v-for="(item, index) in posts"
        :key="index"
        :post="item"
        class="mx-7 mt-10"
        @comments="openComments"
      />
    </div>
  </div>
  <ModalsAddCommentToPost :state="commentsModal" @close="closeCommentsModal" />
</template>

<script setup>
import { PostsControllerModule } from "~/controllers/posts";
import { PostsStoreModule } from "~/stores/posts";

const posts = computed(() => {
  return PostsStoreModule.posts.value;
});

const pageLoading = ref(false);

const commentsModal = ref(false);

const openComments = async (post) => {
  commentsModal.value = true;
  await PostsControllerModule.getComments(post);
};

const closeCommentsModal = () => {
  commentsModal.value = false;
  PostsStoreModule.comments.value = [];
};

onMounted(async () => {
  pageLoading.value = !pageLoading.value;
  await PostsControllerModule.getPosts();
  pageLoading.value = !pageLoading.value;
});
</script>
