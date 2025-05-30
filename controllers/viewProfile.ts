import { BaseAppModule } from "@/stores/baseApp";
import { ViewProfileStoreModule } from "@/stores/viewProfile";
import { userGenratorModel } from "@/composable/userGenerator";

interface Skill {
  id: number;
  skill: string;
  userId: number;
}

interface UserInfo {
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

interface UserProfile {
  userInfo: UserInfo;
  skills: Skill[];
  youSendRequest: boolean;
  hasFriendRequest: boolean;
  isFriend: boolean;
}

export class ViewProfileController extends BaseAppModule {
  async viewProfile(id: number | string) {
    const response: any = await ViewProfileStoreModule.viewProfile(id);
    const user: UserProfile = {
      ...response,
      userInfo: await userGenratorModel(response?.userInfo),
    };
    ViewProfileStoreModule.targetUserProfile.value = user;
  }
}

export const ViewProfileControllerModule = new ViewProfileController();
