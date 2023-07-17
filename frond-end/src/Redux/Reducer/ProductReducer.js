import { FETCH_DELETE_PRODUCT, FETCH_EDIT_PRODUCT, FETCH_FILTER_PRODUCT, FETCH_LIST_PRODUCT, FETCH_SEARCH_PRODUCT, FETCH_SORT_PRODUCT, FETCH_TOTALPage_PRODUCT, FETCH_UPDATE_PRODUCT } from "../Contants/ActionTypeProduct";

// khai bao state ban dau de quan ly
let initialState = {
    listProduct: [],
    productToUpdate: {},
    totalPages: "",
}

// khai baos hamf reducer
export let productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_PRODUCT:
            let listProduct_API = action.payload;
            return {
                ...state,
                listProduct: listProduct_API
            };

        case FETCH_DELETE_PRODUCT:
            let idDelete = action.payload;  // lay ra id can delete
            let listProductState = state.listProduct;        // lay ra listProduct ban dau
            let indexDelete = listProductState.findIndex((product) => product.id === idDelete);
            listProductState.splice(indexDelete, 1)
            return {
                ...state,
                listProduct: listProductState,
            };

        case FETCH_EDIT_PRODUCT:
            return {
                ...state,
                productToUpdate: action.payload,
            }

        case FETCH_UPDATE_PRODUCT:
            return {
                ...state,
                productToUpdate: action.payload,
            }

        case FETCH_FILTER_PRODUCT:
            let listProduct_Filter = action.payload;
            return {
                ...state,
                listProduct: listProduct_Filter
            }

        case FETCH_SEARCH_PRODUCT:
            let listProduct_Search = action.payload;
            return {
                ...state,
                listProduct: listProduct_Search
            }

        case FETCH_SORT_PRODUCT:
            let listProduct_Sort = action.payload;
            return {
                ...state,
                listProduct: listProduct_Sort
            }

        case FETCH_TOTALPage_PRODUCT:
            let TotalPage = action.payload;
            return {
                ...state,
                totalPages: TotalPage
            }

        default:
            return {
                ...state,
            };
    }
}