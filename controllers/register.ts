import { BaseAppModule } from "@/stores/baseApp";
import { RegisterStoreModule } from "@/stores/register";
import { ref } from "vue";

interface Input {
  fristname: string;
  lastname: string;
  email: string;
  password: string;
}

export class RegisterController extends BaseAppModule {
  inputError = ref<Input>({
    fristname: "",
    lastname: "",
    email: "",
    password: "",
  });

  async validateInput(input: Input) {
    const { fristname, lastname, email, password } = input;
    this.inputError.value = {
      email: "",
      password: "",
      fristname: "",
      lastname: "",
    };
    const fristnameValid = this.validLength(fristname, 3, 10);
    if (!fristnameValid.isValid) {
      this.inputError.value.fristname = fristnameValid.message || "";
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
    if (
      fristnameValid.isValid &&
      lastnameValid.isValid &&
      isValid &&
      this.validEmail(email)
    ) {
      RegisterStoreModule.register(input);
    }
  }
}

export const RegisterControllerModule = new RegisterController();
