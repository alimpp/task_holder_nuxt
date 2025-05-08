import { BaseAppStoreElementModule } from "./baseApp";
import { useCookie } from "@/composable/useCookie";
import { ref } from "vue";

interface IAddFriend {
  requestId: number;
  friend: number;
}

export class Friends {
  async addFriend(data: IAddFriend) {
    const { getCookie } = useCookie();
    const token = getCookie("token");

    const res = await $fetch("/api/friends/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
    return res;
  }
}

export const FriendsStoreModule = new Friends();
