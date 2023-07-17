import { getListCategorysAPI } from "../../API/CategoryAPI"
import { FETCH_LIST_CATEGORY } from "../Contants/ActionTypeCategory"

// action lien quan den call API
export let actionFetchListCategoryAPI = () => {
    return (dispatch) => {
        return getListCategorysAPI().then((response) => {
            dispatch(actionFetchListCategory(response));
        })
    }
}

// action dispatch xuong reducer
export let actionFetchListCategory = (getListCategory_Param) => {
    return {
        type: FETCH_LIST_CATEGORY,
        payload: getListCategory_Param,
    }
}