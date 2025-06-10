import { BaseAppModule } from "@/stores/baseApp";
import { userGenratorModel } from "@/composable/userGenerator";
import { UploadControllerModule } from "./upload";
import { PorjectStoreModule } from "@/stores/project";
import { ref } from "vue";

interface ErrorMessages {
  description: string;
  name: string;
}
interface AddProject {
  avatar: string;
  name: string;
  description: string;
}

export class ProjectController extends BaseAppModule {
  public errorMessage = ref<ErrorMessages>({
    name: "",
    description: "",
  });

  public loadingCreate = ref(false);
  public closeModalCreate = ref(false);

  async createProject(body: AddProject) {
    this.loadingCreate.value = true;
    const { avatar, name, description } = body;
    this.errorMessage.value = {
      name: "",
      description: "",
    };

    const nameValid = this.validLength(name, 3, 20);
    if (!nameValid.isValid) {
      this.errorMessage.value.name = nameValid.message || "";
    }
    const descriptionValid = this.validLength(description, 3, 100);
    if (!descriptionValid.isValid) {
      this.errorMessage.value.description = descriptionValid.message || "";
    }
    if (nameValid.isValid && descriptionValid.isValid) {
      await PorjectStoreModule.addProject(body);
      this.loadingCreate.value = false;
      this.closeModalCreate.value = true;
    } else {
      this.loadingCreate.value = false;
      this.closeModalCreate.value = false;
    }
  }
}

export const ProjectControllerModule = new ProjectController();
