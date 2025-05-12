import { BaseAppStoreElementModule } from "./baseApp";
import { ref } from "vue";

import { UserStoreModule } from "./user";
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

export class Users {
  public userlist = ref<IUserList[]>([]);

  async users() {
    const users = await $fetch("/api/users/all", {
      method: "GET",
    });
    return users.filter((user: IUserList) => {
      return user.id != UserStoreModule.user.value.id;
    });
  }
}

export const UsersStoreModule = new Users();
