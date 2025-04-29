interface Input {
  fristname: string;
  lastname: string;
  email: string;
  password: string;
}

export class Register {
  async register(input: Input) {
    await $fetch("/api/auth/register", {
      method: "POST",
      body: { ...input, avatarUrl: "" ,bio: ""},
    });
    navigateTo("/auth/login");
  }
}

export const RegisterStoreModule = new Register();
