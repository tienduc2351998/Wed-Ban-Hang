import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART } from "../Contants/ActionTypeCart";

// khai bao state ban dau de quan ly
let initialState = {
    listCart: []
}

export let cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            return {
                listCart: [...state.listCart, action.payload]
            }
        case DELETE_PRODUCT_CART:
            let idDelete = action.payload.id; // lay id obj can delete
            let listCartProduct = state.listCart // lay listCart ban dau
            let indexDelete = listCartProduct.findIndex((productCart) => productCart.id === idDelete)
            listCartProduct.splice(indexDelete, 1);
            return {
                ...state,
                listCart: [...listCartProduct],
            }

        default:
            return {
                ...state,
            };
    }
}