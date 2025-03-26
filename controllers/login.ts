import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { LoginStoreModule } from "@/stores/login";
import { ref } from "vue";

interface Input {
  email: string;
  password: string;
}

export class LoginController extends BaseAppModule {
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
      await LoginStoreModule.login(input);
    }
  }
}

export const LoginControllerModule = new LoginController();
