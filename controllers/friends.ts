import { BaseAppModule } from "@/stores/baseApp";
import { RequestControllerModule } from "./request";
import { FriendsStoreModule } from "~/stores/friends";
import { UsersStoreModule } from "~/stores/users";

interface IAddFriend {
  requestId: number;
  friend: number;
}

export class FriendsController extends BaseAppModule {
  async getFriends() {
    FriendsStoreModule.friendsList.value = [];
    const userlist = UsersStoreModule.userlist.value;
    const response = await FriendsStoreModule.getFriends();
    for (const element of response) {
      const user = userlist.find((user) => user.id == element.friend);
      if (user) {
        const result = {
          friendListId: element.id,
          userId: user.id,
          ...user,
        };
        FriendsStoreModule.friendsList.value.push(result);
      }
    }
  }

  async addFriend(data: IAddFriend) {
    await FriendsStoreModule.addFriend(data);
    await RequestControllerModule.getRequests();
    await this.getFriends();
  }

  async removeFriend(id: number) {
    await FriendsStoreModule.removeFriend(id);
    await this.getFriends();
  }
}

export const FriendsControllerModule = new FriendsController();
