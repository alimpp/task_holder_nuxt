<template>
  <div class="w-370-px flex">
    <div class="w-35-px flex align-end justify-center">
      <BaseAvatar
        :character="note.author?.fristChar"
        :avatar="note.author?.avatarUrl"
        :bg="note.author?.avatarColor"
      />
    </div>
    <div class="w-335-px flex px-5 mt-5">
      <BaseCard class="fade-animation" bgClass="bg-primary-white">
        <div class="w-100 flex flex-column">
          <div class="flex w-100">
            <div class="flex flex-column justify-center px-5">
              <span class="f-s-10 f-w-500">{{ note.author?.fullname }}</span>
              <span class="f-s-10 f-w-500 color-gray">{{
                note.author?.email
              }}</span>
            </div>
          </div>
          <div class="w-98 flex px-5 py-5 mt-5 border-rounded">
            <span class="f-s-11 f-w-400">{{ note?.note }}</span>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  note: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>
