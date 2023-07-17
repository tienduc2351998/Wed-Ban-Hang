import { FETCH_LIST_CATEGORY } from "../Contants/ActionTypeCategory";

// khai bao state ban dau de quan ly
let initialState = {
    listCategory: [],
}

export let categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_CATEGORY:
            let listCategory_API = action.payload;
            return {
                ...state,
                listCategory: listCategory_API,
            }

        default:
            return {
                ...state
            }
    }
}