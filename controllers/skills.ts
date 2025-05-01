import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { SkillsStoreModule } from "~/stores/skills";

export class SkillsController extends BaseAppModule {
  public inputSkillError = ref<string>("");

  async getSkills() {
    SkillsStoreModule.skills.value = [];
    const response = await SkillsStoreModule.getSkills();
    SkillsStoreModule.skills.value = response;
  }

  async validateSkill(skill: string) {
    if (skill.length < 3) {
      this.inputSkillError.value = "Skill must be at least 3 characters long";
    } else {
      this.inputSkillError.value = "";
      await SkillsStoreModule.addSkill(skill);
      await this.getSkills();
      return true;
    }
  }
}

export const SkillsControllerModule = new SkillsController();
