import { ref } from "vue";

interface IToastMessage {
  title: string;
  text: string;
  type: string;
  id: string | number;
  timeout: number | string;
}

export class BaseAppModule {
  validEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  validEmpty(input: string): { isValid: boolean; message?: string } {
    const length = input.length;
    if (length == 0) {
      return {
        isValid: false,
        message: "The field cannot be empty",
      };
    }
    return {
      isValid: true,
    };
  }

  validLength(
    input: string,
    minLength: number,
    maxLength: number
  ): { isValid: boolean; message?: string } {
    const length = input.length;
    if (length < minLength) {
      return {
        isValid: false,
        message: `The password length must be at least ${minLength} characters.`,
      };
    }
    if (length > maxLength) {
      return {
        isValid: false,
        message: `The password length cannot exceed ${maxLength} characters.`,
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
