import { api } from "./API"

// lay danh sach Category
export let getListCategorysAPI = () => {
    return api("GET", "categorys", null);
};