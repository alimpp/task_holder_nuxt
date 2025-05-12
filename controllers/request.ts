import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { RequestStoreModule } from "~/stores/request";
import { UsersStoreModule } from "~/stores/users";

export class RequestController extends BaseAppModule {
  async getRequests() {
    RequestStoreModule.requestList.value = [];
    const userlist = UsersStoreModule.userlist.value;    
    const response = await RequestStoreModule.getRequests();
    for (const element of response) {
      const user = userlist.find((user) => user.id == element.from);
      if (user) {
        const result = {
          requestId: element.id,
          userId: user.id,
          ...user,
        };
        RequestStoreModule.requestList.value.push(result);
      }
    }
  }
  
  async sendRequest(request: number) {
    await RequestStoreModule.sendRequest(request);
  }

  async removeRequest(id: number) {
    await RequestStoreModule.removeRequest(id);
    this.getRequests();
  }
}

export const RequestControllerModule = new RequestController();
