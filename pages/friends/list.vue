<template>
    <div class="w-100 flex flex-column">
      <div class="w-100">
        <BaseBreadCrumbs />
      </div>
      <div class="w-100 flex flex-column">
         <CardsFriendList v-for="(item, index) in friendsList" :key="index" :user="item" />
      </div>
    </div>
</template>
  
<script setup>
import { FriendsControllerModule} from "~/controllers/friends"
import { FriendsStoreModule } from '~/stores/friends';

definePageMeta({
  middleware: "auth",
});

const friendsList = computed(() => {  
  return FriendsStoreModule.friendsList.value;
})

onMounted(async () => {
  await FriendsControllerModule.getFriends();
});
</script>
  
