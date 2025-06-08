<template>
  <div class="w-100 flex flex-column">
    <div class="w-100">
      <BaseBreadCrumbs />
    </div>
    <div
      class="flex w-100 h-80-dvh align-cemter justify-center"
      v-if="!pageLoading && notes.length == 0"
    >
      <BaseEmptyState
        title="No Friends Found"
        text="Notes list is empty please try again later"
      />
    </div>
    <div class="w-100 flex flex-wrap justify-center" v-if="pageLoading">
      <SkeletonNote v-for="n in 20" class="mx-7 mt-10" />
    </div>
    <div class="w-100 flex flex-wrap justify-center py-20" v-if="!pageLoading">
      <CardsNotes
        v-for="(item, index) in notes"
        :key="index"
        :note="item"
        class="mx-7 mt-10"
      />
    </div>
  </div>
</template>

<script setup>
import { NotesControllerModule } from "~/controllers/notes";
import { NotesStoreModule } from "~/stores/notes";

const notes = computed(() => {
  return NotesStoreModule.notes.value;
});

const pageLoading = ref(false);

onMounted(async () => {
  pageLoading.value = !pageLoading.value;
  await NotesControllerModule.getNotes();
  pageLoading.value = !pageLoading.value;
});
</script>
