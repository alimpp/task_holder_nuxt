import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { UserStoreModule } from "~/stores/user";
import { ref } from "vue";

interface IUpdateProfile {
  fristname: string;
  lastname: string;
  bio: string;
}

export class UserController extends BaseAppModule {
  inputError = ref<IUpdateProfile>({
    fristname: "",
    lastname: "",
    bio: "",
  });

  async validateUpdateProfile(body: IUpdateProfile) {
    const { fristname, lastname, bio } = body;
    this.inputError.value = {
      fristname: "",
      lastname: "",
      bio: "",
    };
    const fristnameValid = this.validLength(fristname, 3, 10);
    if (!fristnameValid.isValid) {
      this.inputError.value.fristname = fristnameValid.message || "";
    }
    const lastnameValid = this.validLength(lastname, 3, 16);
    if (!lastnameValid.isValid) {
      this.inputError.value.lastname = lastnameValid.message || "";
    }
    const bioValid = this.validLength(bio, 3, 100);
    if (!bioValid.isValid) {
      this.inputError.value.bio = bioValid.message || "";
    }

    if (fristnameValid.isValid && lastnameValid.isValid && bioValid.isValid) {
     await UserStoreModule.updateProfile(body);
    }
  }

  async getUserProfile() {
    const response = await UserStoreModule.profile();
    const user = {
      fullname: response.fristname + " " + response.lastname,
      fristChar: response.fristname[0].toUpperCase(),
      fristname: response.fristname,
      lastname: response.lastname,
      email: response.email,
      id: response.id,
      avatarUrl: response.avatarUrl,
      bio: response.bio,
    };
    UserStoreModule.user.value = user;
  }
}

export const UserControllerModule = new UserController();
