import { BaseAppModule } from "@/stores/baseApp";
import { NotesStoreModule } from "~/stores/notes";
import { UsersStoreModule } from "~/stores/users";
import { UsersControllerModule } from "~/controllers/users";

export class NotesController extends BaseAppModule {
  async getNotes() {
    if (UsersStoreModule.userlist.value.length == 0) {
      await UsersControllerModule.getUsersList();
    }
    let notes = [];
    const response = await NotesStoreModule.getNotes();
    for (let elem of response) {
      const obj = {
        ...elem,
        author: UsersStoreModule.userlist.value.find(
          (user) => user.id == elem.authorId
        ),
      };
      notes.push(obj);
    }
    NotesStoreModule.notes.value = notes;
  }
}

export const NotesControllerModule = new NotesController();
