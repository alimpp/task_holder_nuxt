import { BaseAppStoreElementModule } from "./baseApp";
import { ref } from "vue";

interface IUserList {
  users: [];
}

export class UserList {
  public users = ref<IUserList>({
    users: [],
  });
  async getUsers() {
    BaseAppStoreElementModule.loading.value = true;
    const response = await $fetch("/api/users/all", {
      method: "GET",
    });
    BaseAppStoreElementModule.loading.value = false;
    return response;
  }
}

export const UserListStoreModule = new UserList();
