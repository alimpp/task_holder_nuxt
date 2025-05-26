import { BaseAppModule } from "@/stores/baseApp";
import { NotesStoreModule } from "~/stores/notes";
import { userGenratorModel } from '@/composable/userGenerator'


export class NotesController extends BaseAppModule {
  async getNotes() {
    let notes = [];
    const response = await NotesStoreModule.getNotes();
    for (let elem of response) {
      const obj = {
        ...elem,
        author: await userGenratorModel(elem.author),
      };
      notes.push(obj);
    }
    NotesStoreModule.notes.value = notes;
    NotesStoreModule.notes.value.reverse()
  }

  inputError = ref({
    note: "",
  });

  async validateAddNote(note: string) {    
    this.inputError.value.note = "";
    const noteValid = this.validEmpty(note);
    if (!noteValid.isValid) {
      this.inputError.value.note = noteValid.message || "";
    }
    if (noteValid.isValid) {
      await NotesStoreModule.addNote(note);
      await this.getNotes();
    }
  }
}

export const NotesControllerModule = new NotesController();
