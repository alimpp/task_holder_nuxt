import { BaseAppModule } from "@/stores/baseApp";
import { PostsStoreModule } from "~/stores/posts";
import { userGenratorModel } from "@/composable/userGenerator";
import { UploadControllerModule } from "./upload";
import { ref } from "vue";

interface ErrorMessages {
  description: string;
  title: string;
  imageId: string;
}

export class PostsController extends BaseAppModule {
  public errorMessage = ref<ErrorMessages>({
    description: "",
    title: "",
    imageId: "",
  });

  async validateAddPost(body: ErrorMessages) {
    const { description, title, imageId } = body;
    this.errorMessage.value = {
      description: "",
      title: "",
      imageId: "",
    };
    if (!imageId) {
      this.errorMessage.value.imageId = "Image is required";
    }
    const titleValid = this.validLength(title, 10, 30);
    if (!titleValid.isValid) {
      this.errorMessage.value.title = titleValid.message || "";
    }
    const descriptionValid = this.validLength(description, 20, 300);
    if (!descriptionValid.isValid) {
      this.errorMessage.value.description = descriptionValid.message || "";
    }
    if (titleValid.isValid && descriptionValid.isValid && imageId) {
      const response = await PostsStoreModule.addPost(body);
      if (response) {
        await this.getPosts();
        return true;
      }
    }
  }

  async getPosts() {
    let posts = [];
    const response = await PostsStoreModule.getPosts();
    for (let elem of response) {
      const obj = {
        ...elem,
        author: await userGenratorModel(elem.author),
        image: await UploadControllerModule.downloadFileById(elem.imageId),
      };
      posts.push(obj);
    }
    PostsStoreModule.posts.value = posts;
    PostsStoreModule.posts.value.reverse();
  }

  async getComments(post: any) {
    PostsStoreModule.post.value = post;
    let comments = [];
    const response: any = await PostsStoreModule.getComments(post.id);
    for (let elem of response) {
      const obj = {
        ...elem,
        commentFrom: await userGenratorModel(elem.commentFrom),
      };
      comments.push(obj);
    }
    PostsStoreModule.comments.value = comments;
  }

  async addComment(comment: string) {
    if (comment) {
      const response = await PostsStoreModule.addComment(comment);
      if (response) {
        await this.getComments(PostsStoreModule.post.value);
      }
    }
  }
}

export const PostsControllerModule = new PostsController();
