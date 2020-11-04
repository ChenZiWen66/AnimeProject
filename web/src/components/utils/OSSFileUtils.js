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

/**
 * 删除OSS文件目标文件
 * @param src
 * @returns {Promise<boolean>}:如果返回为true则表示删除成功，如果为false则表示删除失败;
 */
async function deleteOSSFile(src) {
    let formData_deleteDOC = new window.FormData();
    formData_deleteDOC.append("src", src);
    try {
        await axios.post("http://localhost:9002/deleteOSSFile", formData_deleteDOC).then(function (response) {
            return true;
        });
    } catch (e) {
        return false;
    }
}

export default {
    upLoadFile2OSS, deleteOSSFile
}