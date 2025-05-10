<template>
  <Layout />
</template>

<script setup>
import { UserControllerModule } from "@/controllers/user";
import { UsersControllerModule } from "~/controllers/users";
import { RequestControllerModule } from "~/controllers/request";
import { FriendsControllerModule} from "~/controllers/friends"

onMounted(async () => {
  await UserControllerModule.getUserProfile();
  await UsersControllerModule.getUsersList();
  await RequestControllerModule.getRequests();
  await FriendsControllerModule.getFriends();
});
</script>
