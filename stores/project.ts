import { BaseAppStoreElementModule } from "./baseApp";
import { useCookie } from "@/composable/useCookie";
import { ref } from "vue";
interface IProject {
  id: string;
  createdBy: number;
  avatar: string;
  name: string;
  description: string;
  createdAt: Date;
}

interface AddProject {
  avatar: string;
  name: string;
  description: string;
}
export class Porject {
  public projects = ref<IProject[]>([]);
  public project = ref<IProject>({
    id: "",
    createdBy: 0,
    avatar: "",
    name: "",
    description: "",
    createdAt: new Date(),
  });

  async getProjects() {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch(`/api/projects/myProjects`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }

  async addProject(body: AddProject) {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch(`/api/projects/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: body,
    });
    return response;
  }

  joinProject() {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = $fetch(`/api/projects/joined`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }

  async removeProject(projectId: string) {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch(`/api/projects/${projectId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }

  async updateProject(body: AddProject, projectId: string) {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch(`/api/projects/${projectId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: body,
    });
    return response;
  }
}

export const PorjectStoreModule = new Porject();
