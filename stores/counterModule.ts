import { ref } from "vue";
import { BaseAppModule } from "@/stores/baseApp";
interface IToastMessage {
  title: string;
  text: string;
  type: string;
  id: string | number;
  timeout: number | string;
}

export class CounterModule extends BaseAppModule {
  public counter = ref<number>(0);

  constructor(
    counter: number,
    loading: boolean,
    toastMessages: IToastMessage[]
  ) {
    super(loading, toastMessages);
    this.counter.value = counter;
  }
  increment() {
    this.counter.value++;
  }

  decrement() {
    this.counter.value--;
    this.createToast({
      title: "danger toast",
      text: "counter decremented",
      type: "danger",
      id: "3",
      timeout: 5000,
    });
  }
}
export const counterStoreModule = new CounterModule(0, false, []);
