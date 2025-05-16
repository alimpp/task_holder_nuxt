import { ref } from "vue";
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

export class Users {
  public userlist = ref<IUserList[]>([]);

  async users() {
    const users = await $fetch("/api/users/all", {
      method: "GET",
    });
    return users;
  }
}

export const UsersStoreModule = new Users();
