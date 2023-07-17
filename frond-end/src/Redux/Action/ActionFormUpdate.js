import { CLOSE_INPUT_FORM_UPDATE, SHOW_INPUT_FORM_UPDATE } from "../Contants/ActionTypeFormUpdate"

// khai bao action open form
export let actionShowInputFormUpdate = () => {
    return {
        type: SHOW_INPUT_FORM_UPDATE,
    }
}

// khai bao action dong form
export let actionCloseInputFormUpdate = () => {
    return {
        type: CLOSE_INPUT_FORM_UPDATE,
    }
}