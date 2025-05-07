import { BaseAppStoreElementModule } from "./baseApp";
import { useCookie } from "@/composable/useCookie";
import { ref } from "vue";
interface IRequest {
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

export class request {
  public requestList = ref<IRequest[]>([]);

  async getRequests() {
    BaseAppStoreElementModule.loading.value = true;
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch("/api/request/list", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    BaseAppStoreElementModule.loading.value = false;
    return response;
  }

  async sendRequest(request: number) {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    await $fetch("/api/request/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        to: request,
      },
    }).then(async (res: any) => {
      if(res?.statusCode == 400) {
        BaseAppStoreElementModule.createToast({
          title: res.message,
          text: res.message,
          type: "danger",
          id: Date.now(),
          timeout: 5000,
        });
      } else {
        BaseAppStoreElementModule.createToast({
          title: res.message,
          text: res.message,
          type: "success",
          id: Date.now(),
          timeout: 5000,
        });
      }
    });
  }

  async removeRequest(id: number) {
    BaseAppStoreElementModule.loading.value = true;
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch(`/api/request/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    BaseAppStoreElementModule.loading.value = false;
    return response;
  }
}

export const RequestStoreModule = new request();
