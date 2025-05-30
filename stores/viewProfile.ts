import { useCookie } from "@/composable/useCookie";
import { ref } from "vue";

interface Skill {
  id: number;
  skill: string;
  userId: number;
}

interface UserInfo {
  fullname: string;
  fristChar: string;
  fristname: string;
  lastname: string;
  email: string;
  id: number;
  avatarUrl: string;
  bio: string;
  avatarColor: string;
}

interface UserProfile {
  userInfo: UserInfo;
  skills: Skill[];
  youSendRequest: boolean;
  hasFriendRequest: boolean;
  isFriend: boolean;
}

export class ViewProfile {
  public targetUserProfile = ref<UserProfile>({
    userInfo: {
      fullname: "",
      fristChar: "",
      fristname: "",
      lastname: "",
      email: "",
      id: 0,
      avatarUrl: "",
      bio: "",
      avatarColor: "",
    },
    skills: [],
    youSendRequest: false,
    hasFriendRequest: false,
    isFriend: false,
  });

  async viewProfile(id: number | string) {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch(`/api/user/viewProfile/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
}

export const ViewProfileStoreModule = new ViewProfile();
