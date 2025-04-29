import { BaseAppStoreElementModule } from "./baseApp";
import { useCookie } from "@/composable/useCookie";
import { ref } from "vue";

interface IUser {
  fullname: string;
  fristChar: string;
  fristname: string;
  lastname: string;
  email: string;
  id: number;
  avatarUrl: string;
  bio: string;
}

interface IUserList {
  users: IUser[];
}

export class User {
  public isAuthenticated = ref<boolean>(false);
  public user = ref<IUser>({
    fullname: "",
    fristChar: "",
    fristname: "",
    lastname: "",
    email: "",
    id: 0,
    avatarUrl: "",
    bio: "",
  });

  async profile() {
    BaseAppStoreElementModule.loading.value = true;
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch("/api/users/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    BaseAppStoreElementModule.loading.value = false;
    if (response) this.isAuthenticated.value = true;
    return response;
  }
}

export class UserList {
  public users = ref<IUserList>({
    users: [],
  });
  async getUsers() {
    BaseAppStoreElementModule.loading.value = true;
    const response = await $fetch("/api/users/all", {
      method: "GET",
    });
    BaseAppStoreElementModule.loading.value = false;
    return response;
  }
}

export const UserStoreModule = new User();
export const UserListStoreModule = new UserList();
