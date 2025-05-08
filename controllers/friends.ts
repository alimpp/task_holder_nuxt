import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { RequestStoreModule } from "~/stores/request";
import { FriendsStoreModule } from "~/stores/friends";

interface IAddFriend {
  requestId: number;
  friend: number;
}

export class FriendsController extends BaseAppModule {
  async addFriend(data: IAddFriend) {
    await FriendsStoreModule.addFriend(data);
  }
}

export const FriendsControllerModule = new FriendsController();
