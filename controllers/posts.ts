import { BaseAppModule } from "@/stores/baseApp";
import { PostsStoreModule } from "~/stores/posts";
import { userGenratorModel } from "@/composable/userGenerator";
import { UploadControllerModule } from "./upload";

export class PostsController extends BaseAppModule {
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
