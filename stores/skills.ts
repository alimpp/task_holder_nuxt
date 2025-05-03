import { BaseAppStoreElementModule } from "./baseApp";
import { useCookie } from "@/composable/useCookie";
import { ref } from "vue";

interface ISkill {
  skill: string;
  userId: number;
  id: number;
}

export class Skills {
  public skills = ref<ISkill[]>([]);

  async getSkills() {
    BaseAppStoreElementModule.loading.value = true;
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch("/api/skills/list", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    BaseAppStoreElementModule.loading.value = false;
    return response;
  }

  async addSkill(skill: string) {
    BaseAppStoreElementModule.loading.value = true;
    const { getCookie } = useCookie();
    const token = getCookie("token");
    await $fetch("/api/skills/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        skill,
      },
    }).then(async (res) => {
      return res;
    });
    BaseAppStoreElementModule.loading.value = false;
  }

  async removeSkill(id: number) {
    BaseAppStoreElementModule.loading.value = true;
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch(`/api/skills/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    BaseAppStoreElementModule.loading.value = false;
    return response;
  }
  
}

export const SkillsStoreModule = new Skills();
