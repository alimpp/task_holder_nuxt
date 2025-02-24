import { ref } from "vue";

interface IToastMessage {
  title: string;
  titleColor: string;
  text: string;
  textColor: string;
  type: string;
  bg: string;
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
}

export const baseAppStoreModule = new BaseAppModule(false, []);
