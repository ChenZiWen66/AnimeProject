/**
 * 这是用来管理动漫信息的方法
 */
import axios from 'axios'
import {globalBus} from "../GlobalBus";

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
        await axios.post("http://localhost:9001/updateAnimeInfo", formData).then(function (response) {
            is_success = true;
        })
    } catch (e) {
        is_success = false;
    }
    return is_success;
}


/**
 *通过属性来查询动漫信息数量
 * @param anime_type
 * @param anime_tag
 * @param anime_zone
 * @returns {Promise<void>}
 */
async function getAnimeInfoCountByAttribute(anime_type, anime_tag, anime_zone) {
    let formData = new window.FormData();
    formData.append("anime_type", anime_type);
    formData.append("anime_tag", anime_tag);
    formData.append("anime_zone", anime_zone);
    let infoCount;
    await axios.post("http://localhost:9001/getAnimeInfoCountByAttribute", formData).then(function (response) {
        infoCount = response.data.animeInfoCount;
    });
    return infoCount
}

/**
 * 通过属性和页面来查询动漫信息
 * @param anime_type
 * @param anime_tag
 * @param anime_zone
 * @param current_page
 * @param page_capacity
 * @returns {Promise<*>}
 */
async function selectAnimeInfoByAttribute(anime_type, anime_tag, anime_zone, current_page, page_capacity) {
    let formData = new window.FormData();
    formData.append("anime_type", anime_type);
    formData.append("anime_tag", anime_tag);
    formData.append("anime_zone", anime_zone);
    formData.append("current_page", current_page);
    formData.append("page_capacity", page_capacity);
    let result;
    await axios.post("http://localhost:9001/selectAnimeInfoByAttribute", formData).then(function (response) {
        result = response.data;
    });
    return result;
}

/**
 * 通过动漫名来获取动漫的数量
 * @param searchContent
 * @returns {Promise<*>}
 */
async function getAnimeInfoCountByName(searchContent) {
    let formData = new window.FormData();
    formData.append("searchContent", searchContent);
    let count;
    await axios.post("http://localhost:9001/getAnimeInfoCountByName", formData).then(function (response) {
        count = response.data.animeInfoCount;
    });
    return count;
}

/**
 * 通过输入动漫名称、页面数和页面大小获取动漫信息
 * @param searchContent
 * @param current_page
 * @param page_capacity
 * @returns {Promise<*>}
 */
async function selectAnimeInfoByName(searchContent, current_page, page_capacity) {
    let formData = new window.FormData();
    formData.append("searchContent", searchContent);
    formData.append("current_page", current_page);
    formData.append("page_capacity", page_capacity);
    let result;
    await axios.post("http://localhost:9001/selectAnimeInfoByName", formData).then(function (response) {
        result = response.data;
    });
    return result;
}

export default {
    updateAnimeInfo,
    getAnimeInfoCountByAttribute,
    selectAnimeInfoByAttribute,
    getAnimeInfoCountByName,
    selectAnimeInfoByName
}