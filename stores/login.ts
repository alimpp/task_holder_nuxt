import { BaseAppStoreElementModule } from "./baseApp";
import { useCookie } from "@/composable/useCookie";

interface Input {
  email: string;
  password: string;
}

export class Login {
  async login(input: Input) {
    const { setCookie, getCookie } = useCookie();
    await $fetch("/api/auth/login", {
      method: "POST",
      body: input,
    })
      .then((res) => {
        setCookie("token", res.token);
        BaseAppStoreElementModule.createToast({
          title: "Login Successfully",
          text: "Login Successfully",
          type: "success",
          id: Date.now(),
          timeout: 5000,
        });
        navigateTo("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export const LoginStoreModule = new Login();
