import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART } from "../Contants/ActionTypeCart"

export let addProductCart = (product) => {
    return {
        type: ADD_PRODUCT_CART,
        payload: product,
    }
}

export let deleteProductCart = (product) => {
    return {
        type: DELETE_PRODUCT_CART,
        payload: product,
    }
}
