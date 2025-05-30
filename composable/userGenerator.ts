import { UploadControllerModule } from "@/controllers/upload";

interface IUser {
  fristname: string;
  lastname: string;
  email: string;
  id: number;
  avatarUrl: string;
  bio: string;
  password?: string | number;
}

export const userGenratorModel = async (user: IUser) => {
  const avatarUrl = user.avatarUrl
    ? await UploadControllerModule.downloadFileById(user.avatarUrl)
    : "";
  return {
    fullname: user.fristname + " " + user.lastname,
    fristChar: user.fristname[0].toUpperCase() + user.lastname[0].toUpperCase(),
    fristname: user.fristname,
    lastname: user.lastname,
    email: user.email,
    id: user.id,
    avatarUrl: avatarUrl,
    bio: user.bio,
    avatarColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
  };
};
