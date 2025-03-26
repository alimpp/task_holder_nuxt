import { BaseAppStoreElementModule } from "./baseApp";

interface Input {
  email: string;
  password: string;
}

export class Login {
  async login(input: Input) {
    BaseAppStoreElementModule.createToast({
      title: "Login Successfully",
      text: "Login Successfully",
      type: "success",
      id: Date.now(),
      timeout: 5000,
    });
    navigateTo("/");
  }
}

export const LoginStoreModule = new Login();
