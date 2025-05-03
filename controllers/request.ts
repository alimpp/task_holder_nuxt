import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { RequestStoreModule } from "~/stores/request";

export class RequestController extends BaseAppModule {
  async getRequests() {
    RequestStoreModule.requestList.value = [];
    const response = await RequestStoreModule.getRequests();
    RequestStoreModule.requestList.value = response;
  }
}

export const RequestControllerModule = new RequestController();
