import { BaseAppStoreElementModule } from "./baseApp";
import { useCookie } from "@/composable/useCookie";
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

interface IUpdateProfile {
  fristname: string;
  lastname: string;
  bio: string;
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

  async updateProfile(body: IUpdateProfile) {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch("/api/users/update", {
      method: "PATCH",
      body: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
}

export const UsersStoreModule = new Users();
