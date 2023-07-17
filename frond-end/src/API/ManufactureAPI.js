import { api } from "./API"

// lay danh sach Manufacture
export let getListManufactureAPI = () => {
    return api("GET", "manufactures", null);
};