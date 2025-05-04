import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { RequestStoreModule } from "~/stores/request";
import { UsersStoreModule } from "~/stores/users";

interface IRequest {
  id: number | string;
  from: number | string;
  to: number | string;
  fullname: any;
}
interface ISendBody {
  to: number | string;
}
export class RequestController extends BaseAppModule {
  async getRequests() {
    RequestStoreModule.requestList.value = [];
    const userlist = UsersStoreModule.userlist.value;
    const response = await RequestStoreModule.getRequests();
    for (const element of response) {
      let request: IRequest = {
        id: element.id,
        from: element.from,
        to: element.to,
        fullname: userlist.find((user) => user.id == element.from)?.fullname,
      };
      RequestStoreModule.requestList.value.push(request);
    }
  }

  async sendRequest(body: ISendBody) {
    await RequestStoreModule.sendRequest(body);
  }

  async removeRequest(id: number) {
    await RequestStoreModule.removeRequest(id);
    
  }
}

export const RequestControllerModule = new RequestController();
