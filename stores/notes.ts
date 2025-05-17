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

interface INotes {
  id: number;
  authorId: number;
  author: IUser;
  note: string;
  created_at: string;
}

export class Notes {
  public notes = ref<INotes[]>([]);

  async getNotes() {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch("/api/notes/all", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
  async addNote(note: string) {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch("/api/notes/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        note: note,
      }
      
    });
    return response;
  }
}

export const NotesStoreModule = new Notes();
