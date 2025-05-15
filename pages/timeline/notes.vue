<template>
  <div class="w-100 flex flex-column">
    <div class="w-100">
      <BaseBreadCrumbs />
    </div>
  </div>
</template>

<script setup>
import { UsersControllerModule } from "~/controllers/users";
import { NotesControllerModule } from "~/controllers/notes";

onMounted(async () => {
  await UsersControllerModule.getUsersList();
  await NotesControllerModule.getNotes();
});
</script>
