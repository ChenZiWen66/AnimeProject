import axios from 'axios'

/**
 * 这是用来管理章节信息的方法
 */

/**
 * 删除章节的数据库信息
 * @param id
 * @returns {Promise<boolean>}
 */
async function deleteChapterInfo(id) {
    let formData_deleteInfo = new window.FormData();
    formData_deleteInfo.append("id", id);
    try {
        axios.post("http://localhost:9001/deleteChapterInfo", formData_deleteInfo).then(function (response) {
            return true;
        })
    } catch (e) {
        return false;
    }
}

/**
 * 更新章节的数据库信息
 * @param id
 * @param chapter_name
 * @param chapter_cover_src
 * @param chapter_video_src
 * @param parent
 * @param uuid
 * @returns {Promise<boolean>}
 */
async function updateChapterInfo(id, chapter_name, chapter_cover_src, chapter_video_src, parent, uuid) {
    let formData = new window.FormData();
    formData.append("id", id);
    formData.append("chapter_name", chapter_name);
    formData.append("chapter_video_src", chapter_video_src);
    formData.append("chapter_cover_src", chapter_cover_src);
    formData.append("parent", parent);
    formData.append("uuid", uuid);
    try {
        await axios.post("http://localhost:9001/updateChapterInfo", formData).then(function (response) {
            return true;
        })
    } catch (e) {
        return false;
    }
}

/**
 * 添加章节的数据库信息
 * @param chapter_name
 * @param chapter_cover_src
 * @param chapter_video_src
 * @param parent
 * @param uuid
 * @returns {Promise<boolean>}
 */
async function insertChapterInfo(chapter_name,chapter_cover_src,chapter_video_src,parent,uuid) {
    let formData = new window.FormData();
    formData.append("chapter_name", chapter_name);
    formData.append("chapter_video_src", chapter_video_src);
    formData.append("chapter_cover_src", chapter_cover_src);
    formData.append("parent", parent);
    formData.append("uuid", uuid);
    let is_success;
    try {
        await axios.post("http://localhost:9001/insertChapterInfo", formData).then(function (response) {
            is_success=true;
        });
    } catch (e) {
        is_success=false;
    }
    return is_success;
}

/**
 * 通过输入动漫的UUID来查询章节信息
 * @param parentUUID
 * @returns {Promise<*>}
 */
async function selectChapterInfoByParent(parentUUID) {
    let formData = new FormData();
    formData.append("parentUUID", parentUUID);
    let result;
    await axios.post("http://localhost:9001/selectChapterInfoByParent", formData).then(function (response) {
        result=response.data;
    });
    return result;
}

export default {
    deleteChapterInfo, updateChapterInfo,insertChapterInfo,selectChapterInfoByParent
}