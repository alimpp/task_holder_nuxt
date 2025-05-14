import { BaseAppModule } from "@/stores/baseApp";
import { RequestControllerModule } from "./request";
import { FriendsStoreModule } from "~/stores/friends";
import { UsersStoreModule } from "~/stores/users";
import { UserStoreModule } from "~/stores/user";
interface IAddFriend {
  requestId: number;
  friend: number;
}

export class FriendsController extends BaseAppModule {
  async getFriends() {
    const currentUserId = UserStoreModule.user.value?.id;
    FriendsStoreModule.friendsList.value = [];
    const userlist = UsersStoreModule.userlist.value;
    const response = await FriendsStoreModule.getFriends();
    for (const element of response) {      
      const user = userlist.find((user) => {
        if(currentUserId == element.friendRequestedBy) {
          return user.id == element.to 
        } else {
          return user.id == element.from
        }
      });      
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
