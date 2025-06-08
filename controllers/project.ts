import { BaseAppModule } from "@/stores/baseApp";
import { userGenratorModel } from "@/composable/userGenerator";
import { UploadControllerModule } from "./upload";
import { ref } from "vue";

interface ErrorMessages {
  description: string;
  title: string;
}

export class ProjectController extends BaseAppModule {
  public errorMessage = ref<ErrorMessages>({
    description: "",
    title: "",
  });
}

export const ProjectControllerModule = new ProjectController();
