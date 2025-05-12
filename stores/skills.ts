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
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch("/api/skills/list", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }

  async addSkill(skill: string) {
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
  }

  async removeSkill(id: number) {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch(`/api/skills/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
  
}

export const SkillsStoreModule = new Skills();
