import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { UsersStoreModule } from "~/stores/users";
interface IUserList {
  fullname: string;
  fristChar: string;
  fristname: string;
  lastname: string;
  email: string;
  id: number;
  avatarUrl: string;
  bio: string;
  avatarColor: string;
}

interface IUpdateProfile {
  fristname: string;
  lastname: string;
  bio: string;
}
export class UsersController extends BaseAppModule {
  public userlist = ref<IUserList[]>([]);

  async getUsersList() {
    this.userlist.value = [];
    const response = await UsersStoreModule.users();
    for (const element of response) {
      let user: IUserList = {
        fullname: element.fristname + " " + element.lastname,
        fristChar: element.fristname[0].toUpperCase(),
        fristname: element.fristname,
        lastname: element.lastname,
        email: element.email,
        id: element.id,
        avatarUrl: element.avatarUrl,
        bio: element.bio,
        avatarColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      };
      this.userlist.value.push(user);
    }
    UsersStoreModule.userlist.value = this.userlist.value;
  }

  inputError = ref<IUpdateProfile>({
    fristname: "",
    lastname: "",
    bio: "",
  });

  async validateUpdateProfile(body: IUpdateProfile) {
    const { fristname, lastname, bio, } = body;
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

    if (
      fristnameValid.isValid &&
      lastnameValid.isValid &&
      bioValid.isValid
    ) {
      UsersStoreModule.updateProfile(body);
    }
  }
}

export const UsersControllerModule = new UsersController();
