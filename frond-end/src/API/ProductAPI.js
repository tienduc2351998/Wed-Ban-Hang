import { api } from "./API"

// lay danh sach Product
export let getListProductAPI = (page, size) => {
    return api("GET", `products?page=${page}&size=${size}`, null);
};

// lay danh sach Product theo categoryName
export let getListProductAPIFilter = (categoryName) => {
    return api("GET", "products?categoryName=" + categoryName, null);
};

// lay danh sach Product theo name
export let getListProductAPISearch = (name) => {
    return api("GET", "products?search=" + name, null);
};

// lay danh sach product theo sort price
export let getListProductAPISort = (sortPrice) => {
    return api("GET", "products?sort=" + sortPrice, null);
};

// Add New Product
export let addProductNewAPI = (productNew) => {
    return api("POST", "products", productNew);
};


// Delete Product
export let deleteProductAPI = (id) => {
    return api("DELETE", "products/" + id, null);
};


// Update Product
export let updateProductAPI = (productUpdate) => {
    return api("PUT", "products/" + productUpdate.id, productUpdate);
};