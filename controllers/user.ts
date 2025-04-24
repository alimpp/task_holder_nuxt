import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { UserStoreModule } from "~/stores/user";

export class UserController extends BaseAppModule {
  async getUserProfile() {
    const response = await UserStoreModule.profile();
    const user = {
      fullname: response.fristname + " " + response.lastname,
      fristChar: response.fristname[0].toUpperCase(),
      fristname: response.fristname,
      lastname: response.lastname,
      email: response.email,
      id: response.id,
      avatarUrl: response.avatarUrl,
    };
    UserStoreModule.user.value = user;
  }
}

export const UserControllerModule = new UserController();
