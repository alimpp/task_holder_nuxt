import { BaseAppStoreElementModule } from "./baseApp";
import { useCookie } from "@/composable/useCookie";

export class Profile {
  async profile() {
    const { setCookie, getCookie } = useCookie();
    const cookie = getCookie("token");

    await $fetch("/api/users/profile", {
      method: "get",
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    })
      .then((res) => {
        BaseAppStoreElementModule.createToast({
          title: `hi ${res.fristname}`,
          text: "Get User Profile Successfully",
          type: "success",
          id: Date.now(),
          timeout: 5000,
        });
        console.log(res);   
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export const ProfileStoreModule = new Profile();
