import { BaseAppModule } from "@/stores/baseApp";
import { userGenratorModel } from "@/composable/userGenerator";
import { UploadControllerModule } from "./upload";
import { PorjectStoreModule } from "@/stores/project";
import { ref } from "vue";

interface ErrorMessages {
  description: string;
  title: string;
}
interface AddProject {
  avatar: string;
  name: string;
  description: string;
}

export class ProjectController extends BaseAppModule {
  public errorMessage = ref<ErrorMessages>({
    description: "",
    title: "",
  });
  public loadingCreate = ref(false);

  async createProject(body: AddProject) {
    this.loadingCreate.value = true;
    const response = await PorjectStoreModule.addProject(body);
  }
}

export const ProjectControllerModule = new ProjectController();
