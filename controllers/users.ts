import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { UsersStoreModule } from "~/stores/users";

export class UsersController extends BaseAppModule {
  async getUsersList() {
    const response = await UsersStoreModule.users();
    // response.map((user: any) => {
    //   const userData = {
    //     fristname: user.fristname,
    //     lastname: user.lastname,
    //     email: user.email,
    //     avatarUrl: user.avatarUrl,
    //     bio: user.bio,
    //     id: user.id,
    //     password: user.password,
    //   };
    UsersStoreModule.userlist.value = response;
  }
}

export const UsersControllerModule = new UsersController();
