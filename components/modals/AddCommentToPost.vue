<template>
  <BaseModal
    width="380px"
    height="90dvh"
    :isOpen="state"
    @close="emit('close')"
    borderRadius="10px"
    :hasFooter="false"
    :hasHeader="false"
  >
    <template #content>
      <div class="flex flex-column">
        <div class="flex flex-column h-40-dvh y-scroll">
          <img
            :src="post?.image"
            alt="image"
            class="w-370-px h-250-px border-rounded"
          />
          <span class="f-s-15 f-w-500 pt-15 px-5">{{ post.title }}</span>
          <span class="f-s-12 f-w-500 color-gray py-5 px-5">{{
            post.description
          }}</span>
        </div>
        <div class="flex flex-column h-38-dvh y-scroll py-2 px-5">
          <div
            class="flex flex-column h-38-dvh align-center justify-center py-2 px-5"
            v-if="comments.length == 0"
          >
            <BaseEmptyState />
          </div>
          <div
            class="flex mt-10 slid-up-animation-1s"
            v-for="comment in comments"
            v-else
          >
            <div>
              <BaseAvatar
                width="35px"
                height="35px"
                :character="comment.commentFrom?.fristChar"
                :avatar="comment.commentFrom?.avatarUrl"
                :bg="comment.commentFrom?.avatarColor"
              />
            </div>
            <div
              class="flex flex-column justify-center px-5 py-2 border-bottom-gray w-320-px"
            >
              <span class="f-s-10 f-w-500">{{
                comment.commentFrom.email
              }}</span>
              <span class="f-s-10 f-w-500">{{ comment.comment }}</span>
            </div>
          </div>
        </div>
        <div class="flex align-center w-370-px">
          <div class="w-325-px px-">
            <BaseInput
              class="w-305-px"
              placeholder="Type your comment"
              v-model="comment"
            />
          </div>
          <div
            v-if="loading"
            class="h-40-px flex align-center justify-center border-rounded px-5 w-35-px"
          >
            <IconsSpinner width="40" height="40" color="#000" />
          </div>
          <div
            v-else
            @click="addComment"
            class="bg-primary h-40-px flex align-center justify-center border-rounded px-5 w-35-px cursor-pointer"
          >
            <IconsSend color="#fff" />
          </div>
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
import { PostsControllerModule } from "~/controllers/posts";
import { PostsStoreModule } from "~/stores/posts";

import { ref } from "vue";
const emit = defineEmits(["close"]);

const comment = ref("");
const loading = ref(false);

const post = computed(() => {
  return PostsStoreModule.post.value;
});

const comments = computed(() => {
  return PostsStoreModule.comments.value;
});

const addComment = async () => {
  loading.value = true;
  await PostsControllerModule.addComment(comment.value);
  loading.value = false;
  comment.value = "";
};

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
});
</script>
