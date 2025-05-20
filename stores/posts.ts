import { useCookie } from "@/composable/useCookie";
import { ref } from "vue";

interface IUser {
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

interface IPosts {
  author: IUser;
  authorId: number;
  created_at: string;
  description: string;
  id: string;
  image: string;
  imageId: string;
  title: string;
}

export class Posts {
  public posts = ref<IPosts[]>([]);

  async getPosts() {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch("/api/post/all", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
}

export const PostsStoreModule = new Posts();
