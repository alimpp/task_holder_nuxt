import { BaseAppStoreElementModule } from "./baseApp";
import { useCookie } from "@/composable/useCookie";
import { ref } from "vue";

interface IRequest {
  id: number | string;
  from: number | string;
  to: number | string;
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

  async sendRequest(request: string) {
    BaseAppStoreElementModule.loading.value = true;
    const { getCookie } = useCookie();
    const token = getCookie("token");
    await $fetch("/api/request/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        request,
      },
    }).then(async (res) => {
      return res;
    });
    BaseAppStoreElementModule.loading.value = false;
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
