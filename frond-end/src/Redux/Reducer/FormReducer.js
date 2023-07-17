import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Contants/ActionTypeForm";


// Khai báo ra các State (ban dau) cần quản lý trong Store -> kieu obj
let initialState = {
    showForm: false,
}

// khai bao Reducer(ben trong su dung switch-case) : nhan state ban dau + action
export let formReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_INPUT_FORM:
            return {
                ...state,
                showForm: true,
            }

        case CLOSE_INPUT_FORM:
            return {
                ...state,
                showForm: false,
            }

        default:
            return {
                ...state,
            };
    }
}