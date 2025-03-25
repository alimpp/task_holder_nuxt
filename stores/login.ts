import { BaseAppModule, BaseAppStoreElementModule } from "./baseApp";

interface Input {
  email: string;
  password: string;
}

export class Login extends BaseAppModule {
  inputError = ref<Input>({
    email: "",
    password: "",
  });

  async validateInput(input: Input) {
    const { email, password } = input;
    this.inputError.value = { email: "", password: "" };
    if (!this.validEmail(email)) {
      this.inputError.value.email = "Email Not Valid";
    }
    const { isValid, message } = this.validLength(password, 8, 16);
    if (!isValid) {
      this.inputError.value.password = message || "";
    }
    if (isValid && this.validEmail(email)) {
      this.login(input);
    }
  }

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
