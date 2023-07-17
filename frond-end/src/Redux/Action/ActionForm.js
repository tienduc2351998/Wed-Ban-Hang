import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Contants/ActionTypeForm"

// khai bao action open form
export let actionShowInputForm = () => {
    return {
        type: SHOW_INPUT_FORM,
    }
}

// khai bao action dong form
export let actionCloseInputForm = () => {
    return {
        type: CLOSE_INPUT_FORM,
    }
}