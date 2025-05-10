import { BaseAppStoreElementModule } from "./baseApp";
import { useCookie } from "@/composable/useCookie";
import { ref } from "vue";

interface IFriendsList {
  fullname: string;
  fristChar: string;
  fristname: string;
  lastname: string;
  email: string;
  id: number;
  avatarUrl: string;
  bio: string;
  avatarColor: string;
}
interface IAddFriend {
  requestId: number;
  friend: number;
}

export class Friends {
  public friendsList = ref<IFriendsList[]>([]);
  async getFriends() {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch("/api/friends/list", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }

  async addFriend(data: IAddFriend) {
    const { getCookie } = useCookie();
    const token = getCookie("token");

    const response = await $fetch("/api/friends/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
    return response;
  }
}

export const FriendsStoreModule = new Friends();
