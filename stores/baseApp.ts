import { ref } from "vue";

interface IToastMessage {
  title: string;
  text: string;
  type: string;
  id: string | number;
  timeout: number | string;
}

export class BaseAppModule {
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

  validEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  validLength(
    input: string,
    minLength: number,
    maxLength: number
  ): { isValid: boolean; message?: string } {
    if (minLength > maxLength) {
      return {
        isValid: false,
        message: "حداقل طول نمی‌تواند از حداکثر طول بیشتر باشد",
      };
    }
    const length = input.length;
    if (length < minLength) {
      return {
        isValid: false,
        message: `طول رشته باید حداقل ${minLength} کاراکتر باشد`,
      };
    }
    if (length > maxLength) {
      return {
        isValid: false,
        message: `طول رشته نمی‌تواند بیشتر از ${maxLength} کاراکتر باشد`,
      };
    }
    return { isValid: true };
  }
}

export class BaseAppElementModule {
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

export const baseAppStoreModule = new BaseAppModule();
export const BaseAppStoreElementModule = new BaseAppElementModule(false, []);
