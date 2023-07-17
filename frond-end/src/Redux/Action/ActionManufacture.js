import { getListManufactureAPI } from "../../API/ManufactureAPI"
import { FETCH_LIST_MANUFACTURE } from "../Contants/ActionTypeManufacture"

// action lien quan den call API
export let actionFetchListManufactureAPI = () => {
    return (dispatch) => {
        getListManufactureAPI().then((response) => {
            dispatch(actionFetchListManufacture(response))
        })
    }
}


// action dispatch xuong reducer
export let actionFetchListManufacture = (getListManufacture_Param) => {
    return {
        type: FETCH_LIST_MANUFACTURE,
        payload: getListManufacture_Param,
    }
}