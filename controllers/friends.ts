import { BaseAppModule } from "@/stores/baseApp";
import { RequestControllerModule } from "./request";
import { FriendsStoreModule } from "~/stores/friends";
import { UsersStoreModule } from "~/stores/users";
import { UserStoreModule } from "~/stores/user";
import { userGenratorModel } from '@/composable/userGenerator'

interface IFriendsList {
  avatarColor: string;
  avatarUrl: string;
  bio: string;
  email: string;
  friendListId: number;
  fristChar: string; 
  fristname: string;
  fullname: string;
  id: number;
  lastname: string;
}

interface IAddFriend {
  requestId: number;
  friend: number;
}

export class FriendsController extends BaseAppModule {
  async getFriends() {
    FriendsStoreModule.friendsList.value = [];
    const response = await FriendsStoreModule.getFriends();
    for (const element of response) {  
      let result : IFriendsList | any = {};            
      if(UserStoreModule.user.value?.id == element.friendRequestedBy.id) {
       result = {
        friendListId: element.id,
        ...await userGenratorModel(element.to)
       }
      } else {
        result = {
          friendListId: element.id,
          ...await userGenratorModel(element.from)
         }
      } 
      FriendsStoreModule.friendsList.value.push(result);      
    }
    console.log(response);
    console.log(FriendsStoreModule.friendsList.value);
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
