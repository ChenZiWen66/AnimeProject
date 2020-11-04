import axios from 'axios'
/**
 * 将文件上传至OSS目标地址
 * @param file
 * @param oss_src
 * @returns {Promise<*>}
 */
async function upLoadFile2OSS(file, oss_src) {
    let src;
    let formData = new window.FormData();
    formData.append("file", file);
    formData.append("src", oss_src);
    await axios.post("http://localhost:9002/uploadFile2OSS", formData).then(function (response) {
        src = response.data.fileUrl_OSS;
    });
    return src;
}

export default {
    upLoadFile2OSS
}