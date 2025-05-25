import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { RequestStoreModule } from "~/stores/request";
import { userGenratorModel } from '@/composable/userGenerator'

export class RequestController extends BaseAppModule {

  async getRequests() {
    RequestStoreModule.requestList.value = [];
    const response = await RequestStoreModule.getRequests();
    for (const element of response) {
      const from = await userGenratorModel(element.from)
      const result = {
        requestId: element.id,
        userId: element.from.id,
        ...from,
      };
      RequestStoreModule.requestList.value.push(result);
    }
    console.log(RequestStoreModule.requestList.value);
    
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
