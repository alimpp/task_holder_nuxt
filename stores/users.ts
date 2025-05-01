import { BaseAppStoreElementModule } from "./baseApp";
import { ref } from "vue";

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
    BaseAppStoreElementModule.loading.value = true;
    const response = await $fetch("/api/users/all", {
      method: "GET",
    });
    BaseAppStoreElementModule.loading.value = false;
    return response;
  }
}

export const UsersStoreModule = new Users();
