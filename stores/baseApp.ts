import { ref } from "vue";

interface IToastMessage {
  title: string;
  text: string;
  type: string;
  id: string | number;
  timeout: number | string;
}

export class BaseAppModule {
  public loading = ref<boolean>(false);
  public toastMessages = ref<IToastMessage[]>([]);

  constructor(loading: boolean, toastMessages: IToastMessage[]) {
    this.loading.value = loading;
    this.toastMessages.value = toastMessages;
  }

  createToast(toast: IToastMessage) {
    this.toastMessages.value.push(toast);
  }

  removeToast(id: number | string) {
    this.toastMessages.value = this.toastMessages.value.filter(
      (toast: IToastMessage) => {
        return toast.id != id;
      }
    );
  }

  convertDataToJson(data: any) {
    const response = JSON.stringify(data);
    return response;
  }

  parseJsonData(data: any) {
    const response = JSON.parse(data);
    return response;
  }

  saveToLocaleStorage(key: string, data: any) {
    localStorage.setItem(key, data);
  }

  getDataFromLocaleStorage(key: string) {
    const response = localStorage.getItem(key);
    return response;
  }

  removeItemFromLocaleStorage(key: string) {
    localStorage.removeItem(key);
  }
}

export const baseAppStoreModule = new BaseAppModule(false, []);
