// store.js
import { reactive, version } from "vue";
import { invoke } from "@tauri-apps/api";
// import { msg } from '../data/msg.json'
import { download } from "tauri-plugin-upload-api";

export const useTestStore = reactive({
    async testMsg() {
        // console.log("Cunt");
        download(
            "https://builder.blender.org/download/daily/blender-4.1.0-alpha+main.515d25fbedff-windows.amd64-release.zip",
            "C:\\Users\\J\\Desktop\\BlenderBaseApps\\test.zip",
            (progress, total) => console.log(`Downloaded ${progress} of ${total} bytes`), // a callback that will be called with the download progress
            // { "Content-Type": "text/plain" }, // optional headers to send with the request
          );
    }
})