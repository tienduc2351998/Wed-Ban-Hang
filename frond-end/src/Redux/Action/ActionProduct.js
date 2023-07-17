import { addProductNewAPI, deleteProductAPI, getListProductAPI, getListProductAPIFilter, getListProductAPISearch, getListProductAPISort, updateProductAPI } from "../../API/ProductAPI"
import { FETCH_DELETE_PRODUCT, FETCH_EDIT_PRODUCT, FETCH_FILTER_PRODUCT, FETCH_LIST_PRODUCT, FETCH_SEARCH_PRODUCT, FETCH_SORT_PRODUCT, FETCH_TOTALPage_PRODUCT, FETCH_UPDATE_PRODUCT } from "../Contants/ActionTypeProduct"

//Todo action getList Product
// action lien quan den call API
export let actionFetchListProductAPI = (page, size) => {
    return (dispatch) => {
        return getListProductAPI(page, size).then((response) => {
            console.log("response", response);
            dispatch(actionFetchListProduct(response.content))
        })
    }
}

// action dispatch xuong reducer
export let actionFetchListProduct = (getListProductAPI_Param) => {
    return {
        type: FETCH_LIST_PRODUCT,
        payload: getListProductAPI_Param,
    }
}

//TODO HAM PAGE_PRODUCT
export let actionTotalPageProductAPI = (page, size) => {
    return (dispatch) => {
        return getListProductAPI(page, size).then((response) => {
            dispatch(actionTotalPageProduct(response.totalPages))
        })
    }
}

//action dispatch totalPage
export let actionTotalPageProduct = (totalPage) => {
    return {
        type: FETCH_TOTALPage_PRODUCT,
        payload: totalPage,
    }
}

//Todo action them moi product
export let actionAddProduct_API = (productNew) => {
    return (dispatch) => {
        addProductNewAPI(productNew).then((response) => {
            // sau khi them thanh cong se thuc hien dispatch actionFetchListProductAPI de load lai du lieu
            dispatch(actionFetchListProductAPI());
        })
    }
}

//Todo action delete product
// action lien quan den delete Product
export let actionDeleteProduct_API = (id) => {
    return (dispatch) => {
        deleteProductAPI(id).then((response) => {

            dispatch(actionDeleteProduct(id));
            // sau khi delete thanh cong se thuc hien dispatch actionFetchListProductAPI de load lai du lieu
            dispatch(actionFetchListProductAPI());
        })
    }
}

// action dispatch xuong reducer
export let actionDeleteProduct = (idDelete) => {
    return {
        type: FETCH_DELETE_PRODUCT,
        payload: idDelete,
    }
}

//Todo action edit Product
export let actionEditProduct = (productEdit) => {
    return {
        type: FETCH_EDIT_PRODUCT,
        payload: productEdit,
    }
}

//Todo Lưu thông tin của Product Update lên redux
export let actionUpdateProduct_API = (productUpdate) => {
    return (dispatch) => {
        return updateProductAPI(productUpdate).then((response) => {
            dispatch(actionUpdateProduct(response))
            // sau khi update thanh cong se thuc hien dispatch actionFetchListProductAPI de load lai du lieu
            dispatch(actionFetchListProductAPI());
        })
    }
}

// action dispatch xuong reducer
export let actionUpdateProduct = (product) => {
    return {
        type: FETCH_UPDATE_PRODUCT,
        payload: product,
    }
}

//todo action getListProduct Filter CategoryName
export let actionFetchFilterProductAPI = (product_CategoryName) => {
    return (dispatch) => {
        return getListProductAPIFilter(product_CategoryName).then((response) => {
            dispatch(actionFetchFilterProduct(response.content))
        })
    }
}

// action dispatch xuong reducer
export let actionFetchFilterProduct = (ProductAPI_Filter) => {
    return {
        type: FETCH_FILTER_PRODUCT,
        payload: ProductAPI_Filter,
    }
}

//todo action getListProduct Search Name
export let actionFetchSearchProductAPI = (name) => {
    return (dispatch) => {
        return getListProductAPISearch(name).then((response) => {
            dispatch(actionFetchSearchProduct(response.content))
        })
    }
}

// action dispatch xuong reducer
export let actionFetchSearchProduct = (ProductAPI_Search) => {
    return {
        type: FETCH_SEARCH_PRODUCT,
        payload: ProductAPI_Search,
    }
}

//todo action getListProduct Sort Price
export let actionFetchSortProductAPI = (sortPrice) => {
    return (dispatch) => {
        return getListProductAPISort(sortPrice).then((response) => {
            dispatch(actionFetchSortProduct(response.content))
        })
    }
}

// action dispatch xuong reducer
export let actionFetchSortProduct = (ProductAPI_Sort) => {
    return {
        type: FETCH_SORT_PRODUCT,
        payload: ProductAPI_Sort,
    }
}