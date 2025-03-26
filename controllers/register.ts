import { BaseAppModule } from "@/stores/baseApp";
import { ref } from "vue";

interface Input {
  frsitname: string;
  lastname: string;
  email: string;
  password: string;
  confrimPassword: string;
}

export class RegisterController extends BaseAppModule {
  inputError = ref<Input>({
    frsitname: "",
    lastname: "",
    email: "",
    password: "",
    confrimPassword: "",
  });

  async validateInput(input: Input) {
    const { frsitname, lastname, email, password, confrimPassword } = input;
    this.inputError.value = {
      email: "",
      password: "",
      frsitname: "",
      lastname: "",
      confrimPassword: "",
    };
    const frsitnameValid = this.validLength(frsitname, 3, 10);
    if (!frsitnameValid.isValid) {
      this.inputError.value.frsitname = frsitnameValid.message || "";
    }
    const lastnameValid = this.validLength(lastname, 3, 16);
    if (!lastnameValid.isValid) {
      this.inputError.value.lastname = lastnameValid.message || "";
    }
    if (!this.validEmail(email)) {
      this.inputError.value.email = "Email Not Valid";
    }
    const { isValid, message } = this.validLength(password, 8, 16);
    if (!isValid) {
      this.inputError.value.password = message || "";
    }
    if (password !== confrimPassword) {
      this.inputError.value.confrimPassword = "Password Not Match";
    }
    if (
      frsitnameValid.isValid &&
      lastnameValid.isValid &&
      isValid &&
      this.validEmail(email) &&
      this.inputError.value.confrimPassword.length == 0
    ) {
      this.register(input);
    }
  }

  async register(input: Input) {
    navigateTo("/auth/login");
  }
}

export const RegisterControllerModule = new RegisterController();
