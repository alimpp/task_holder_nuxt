export class Upload {
    async uploadFile(file: FormData) {                
        const response = await $fetch(`http://localhost:4000/files/upload`, {
            method: "POST",
            body: file,
            "Content-Type": "application/json;",
            "Content-Length": "258"
        });
        return response;
    }
}

export const UploadStoreModule = new Upload();
