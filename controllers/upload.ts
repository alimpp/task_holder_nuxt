import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { UploadStoreModule } from "@/stores/upload";

export class UploadController extends BaseAppModule {
    async uploadFile(file: File) {
        BaseAppStoreElementModule.loading.value = true
        const formData = new FormData();
        formData.append("file", file);
        const response = await UploadStoreModule.uploadFile(formData)
        BaseAppStoreElementModule.loading.value = false
        return response
    }
    
    async downloadFileById(id: string) {
        return `http://localhost:4000/files/${id}`
    }
}

export const UploadControllerModule = new UploadController();
