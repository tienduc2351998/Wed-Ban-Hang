import { CLOSE_INPUT_FORM_UPDATE, SHOW_INPUT_FORM_UPDATE } from "../Contants/ActionTypeFormUpdate";

// Khai báo ra các State (ban dau) cần quản lý trong Store -> kieu obj
let initialState = {
    showFormUpdate: false,
}

// khai bao Reducer(ben trong su dung switch-case) : nhan state ban dau + action
export let formUpdateReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_INPUT_FORM_UPDATE:
            return {
                ...state,
                showFormUpdate: true,
            }

        case CLOSE_INPUT_FORM_UPDATE:
            return {
                ...state,
                showFormUpdate: false,
            }

        default:
            return {
                ...state,
            };
    }
}