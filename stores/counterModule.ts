import { ref } from "vue";
import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
interface IToastMessage {
  title: string;
  text: string;
  type: string;
  id: string | number;
  timeout: number | string;
}

const appStoreElementModule = BaseAppStoreElementModule;

export class CounterModule extends BaseAppModule {
  public counter = ref<number>(0);

  constructor(counter: number) {
    super();
    this.counter.value = counter;
  }
  increment() {
    this.counter.value++;
    this.saveToLocaleStorage("counter", this.counter.value);
    appStoreElementModule.createToast({
      title: "conter added",
      text: "counter incrmented",
      type: "success",
      id: "10",
      timeout: 7000,
    });
  }

  decrement() {
    this.counter.value--;
    appStoreElementModule.createToast({
      title: "danger toast",
      text: "counter decremented",
      type: "danger",
      id: "11",
      timeout: 5000,
    });
  }
}
export const counterStoreModule = new CounterModule(0);
