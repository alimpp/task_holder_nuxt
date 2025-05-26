import { BaseAppModule } from "@/stores/baseApp";
import { PostsStoreModule } from "~/stores/posts";
import { userGenratorModel } from '@/composable/userGenerator'
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
    PostsStoreModule.posts.value.reverse()    
  }
}

export const PostsControllerModule = new PostsController();
