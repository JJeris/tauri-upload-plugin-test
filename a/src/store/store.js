// store.js
import { reactive, version } from "vue";
import { invoke } from "@tauri-apps/api";
// import { msg } from '../data/msg.json'
import { download } from "tauri-plugin-upload-api";

export const useTestStore = reactive({
    async testMsg() {
        console.log("https://builder.blender.org/download/daily/archive/blender-4.1.0-alpha+main.f03a01504939-windows.amd64-release.zip");
        try {
            download(
                "https://builder.blender.org/download/daily/archive/blender-4.1.0-alpha+main.f03a01504939-windows.amd64-release.zip",
                "C:\\Users\\J\\Desktop\\BlenderBaseDirPath\\test8.zip",
                (progress, total) => console.log(`Downloaded ${progress} of ${total} bytes`), // a callback that will be called with the download progress
                // { "Content-Type": "text/plain" }, // optional headers to send with the request
              );
        } catch (error) {
            console.log(error);
        }
        
    }
})