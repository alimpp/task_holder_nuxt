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
  commentsCount: number;
  likesCount: number;
  youLiked: boolean;
}

interface AddPost {
  description: string;
  title: string;
  imageId: string;
}

export class Posts {
  public posts = ref<IPosts[]>([]);
  public post = ref<IPosts>({
    author: {
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
    authorId: 0,
    created_at: "",
    description: "",
    id: "",
    image: "",
    imageId: "",
    title: "",
    commentsCount: 0,
    likesCount: 0,
    youLiked: false,
  });
  public comments = ref<any[]>([]);
  public loadingComment = ref<boolean>(false)

  async addPost(body: AddPost) {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch("/api/post/add", {
      method: "POST",
      body: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }

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

  async getComments(postId: string) {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    this.loadingComment.value = true
    const response = await $fetch(`/api/post/comments/${postId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    this.loadingComment.value = false
    return response;
  }

  async addComment(comment: string) {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch(`/api/post/comments/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        comment: comment,
        postId: this.post.value.id,
      },
    });
    return response;
  }

  async like(postId: string) {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch(`/api/like/liked`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        postId: postId,
      },
    });
    return response;
  }

  async dislike(postId: string) {
    const { getCookie } = useCookie();
    const token = getCookie("token");
    const response = await $fetch(`/api/like/dislike`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        postId: postId,
      },
    });
    return response;
  }
}

export const PostsStoreModule = new Posts();
