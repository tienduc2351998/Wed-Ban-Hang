import { FETCH_LIST_MANUFACTURE } from "../Contants/ActionTypeManufacture";

// khai bao state ban dau de quan ly
let initialState = {
    listManufacture: [],
}

export let manufactureReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_MANUFACTURE:
            let listManuFacture_API = action.payload
            return {
                ...state,
                listManufacture: listManuFacture_API,
            }


        default:
            return {
                ...state
            }
    }
}