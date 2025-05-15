import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { UsersStoreModule } from "~/stores/users";
interface IUserList {
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
export class UsersController extends BaseAppModule {
  async getUsersList() {
    let userlist = [];
    const response = await UsersStoreModule.users();
    for (const element of response) {
      let user: IUserList = {
        fullname: element.fristname + " " + element.lastname,
        fristChar: element.fristname[0].toUpperCase(),
        fristname: element.fristname,
        lastname: element.lastname,
        email: element.email,
        id: element.id,
        avatarUrl: element.avatarUrl,
        bio: element.bio,
        avatarColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      };
      userlist.push(user);
    }
    UsersStoreModule.userlist.value = userlist;
  }
}

export const UsersControllerModule = new UsersController();
