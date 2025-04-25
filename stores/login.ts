import { BaseAppStoreElementModule } from "./baseApp";
import { useCookie } from "@/composable/useCookie";
import { ref } from "vue";

interface Input {
  email: string;
  password: string;
}

export class Login {
  public confrimModalState = ref<Boolean>(false);

  async login(input: Input) {
    const { setCookie } = useCookie();

    await $fetch("/api/auth/login", {
      method: "POST",
      body: input,
    })
      .then((res) => {
        setCookie("token", res.token, { expires: 7 });
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
        if (err.data.data.statusCode == 401) {
          this.confrimModalState.value = true;
        }
      });
  }
}

export const LoginStoreModule = new Login();
