import { BaseAppModule } from "@/stores/baseApp";
import { NotesStoreModule } from "~/stores/notes";
import { UsersStoreModule } from "~/stores/users";

export class NotesController extends BaseAppModule {
  async getNotes() {
    let notes = [];
    const response = await NotesStoreModule.getNotes();
    for (let elem of response) {
      const author = UsersStoreModule.userlist.value.find(
        (user) => user.id == elem.authorId
      );
      const obj = {
        ...elem,
        author: author,
      };
      notes.push(obj);
    }
    NotesStoreModule.notes.value = notes;
    console.log(NotesStoreModule.notes.value);
  }
}

export const NotesControllerModule = new NotesController();
