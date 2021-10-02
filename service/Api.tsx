import { apiClient } from "./client";
import ApiConfig from '../config/api-config';

const api = apiClient;

const getStoreLists = () => {
    return api.get('storelist.json');
}

const getCategoryList = () => {
    return api.get(ApiConfig.CATEGORYLIST);
}

export const getsubCategoryList = (categoryId: any) => {
    let bodyFormData = new FormData();
    bodyFormData.append('categoryId', categoryId);
    return api.post(ApiConfig.PRODUCTLIST, bodyFormData);
}

const getProducts = (data: any) => {
    return api.post(ApiConfig.PRODUCTLIST, data);
}

export const searchProducts = (key: any) => {
        let bodyFormData = new FormData();
        bodyFormData.append('keyword', key);
        return api.post('pizzasearch.json', bodyFormData);
}

export const getBrands = (key: any) => {
    return api.get(ApiConfig.BRANDLIST);
}

export const getStores = () => {
    return api.get(ApiConfig.VENDORLIST);
}
export const getPreferences = () => {
    return api.get(ApiConfig.PREFERENCES);
}
export const getBrand = () => {
    return api.get(ApiConfig.BRANDS);
}
export { getStoreLists, getCategoryList, getProducts };
