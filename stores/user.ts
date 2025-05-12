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

interface IUpdateProfile {
  fristname: string;
  lastname: string;
  bio: string;
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

  async updateProfile(body: IUpdateProfile) {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    await $fetch("/api/users/update", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: body,
    });
    await this.profile();
  }
}

export const UserStoreModule = new User();
