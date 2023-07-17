import { combineReducers } from "redux";
import { formReducer } from "./FormReducer";
import { productReducer } from "./ProductReducer";
import { categoryReducer } from "./CategoryReducer";
import { manufactureReducer } from "./ManufactureReducer";
import { formUpdateReducer } from "./FormUpdateReducer";
import { cartReducer } from "./CartReducer";

export let rootReducer = combineReducers({
    showFormState: formReducer,
    listProductState: productReducer,
    listCategoryState: categoryReducer,
    listManufactureState: manufactureReducer,
    showFormUpdateState: formUpdateReducer,
    listProductCartState: cartReducer,

})