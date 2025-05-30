import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { RequestStoreModule } from "~/stores/request";
import { userGenratorModel } from "@/composable/userGenerator";
import { UsersControllerModule } from "./users";
export class RequestController extends BaseAppModule {
  async getRequests() {
    RequestStoreModule.requestList.value = [];
    const response = await RequestStoreModule.getRequests();
    for (const element of response) {
      const from = await userGenratorModel(element.from);
      const result = {
        requestId: element.id,
        userId: element.from.id,
        ...from,
      };
      RequestStoreModule.requestList.value.push(result);
    }
  }

  async sendRequest(request: number) {
    await RequestStoreModule.sendRequest(request);
    await UsersControllerModule.getUsersList();
  }

  async removeRequest(id: number) {
    await RequestStoreModule.removeRequest(id);
    this.getRequests();
  }
}

export const RequestControllerModule = new RequestController();
