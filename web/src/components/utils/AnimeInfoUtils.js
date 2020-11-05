/**
 * 这是用来管理动漫信息的方法
 */
import axios from 'axios'

/**
 * 修改动漫的数据库信息
 * @param id
 * @param uuid
 * @param anime_name
 * @param anime_type
 * @param anime_zone
 * @param anime_tag
 * @param anime_describe
 * @param alias
 * @param anime_year
 * @param indexes
 * @param update_info
 * @param coverimg_src
 * @returns {Promise<void>}
 */
async function updateAnimeInfo(id, uuid, anime_name, anime_type, anime_zone, anime_tag, anime_describe, alias, anime_year, indexes, update_info, coverimg_src) {
    let formData = new FormData();
    let is_success;
    formData.append("id", id);
    formData.append("uuid", uuid);
    formData.append("anime_name", anime_name);
    formData.append("anime_type", anime_type);
    formData.append("anime_zone", anime_zone);
    formData.append("anime_tag", anime_tag);
    formData.append("anime_describe", anime_describe);
    formData.append("alias", alias);
    formData.append("anime_year", anime_year);
    formData.append("indexes", indexes);
    formData.append("update_info", update_info);
    formData.append("coverimg_src", coverimg_src);

    try {
        axios.post("http://localhost:9001/updateAnimeInfo", formData).then(function (response) {
            is_success = true;
        })
    } catch (e) {
        is_success = false;
    }
    return is_success;
}


export default {
    updateAnimeInfo
}