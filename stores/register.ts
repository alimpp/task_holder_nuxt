interface Input {
  frsitname: string;
  lastname: string;
  email: string;
  password: string;
  confrimPassword: string;
}

export class Register {
  async register(input: Input) {
    navigateTo("/auth/login");
    return input;
  }
}

export const RegisterStoreModule = new Register();
