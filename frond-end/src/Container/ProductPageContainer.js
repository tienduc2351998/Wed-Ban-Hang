import React, { useEffect } from 'react';
import CreateButton from '../ComponentProduct/Product/CreateButton';
import ModelCreateNewProduct from '../ComponentProduct/Product/ModelCreateNewProduct';
import ResultForm from '../ComponentProduct/Product/ResultForm';
import { Container } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { actionCloseInputForm, actionShowInputForm } from '../Redux/Action/ActionForm';
import { actionAddProduct_API, actionDeleteProduct_API, actionEditProduct, actionFetchListProductAPI, actionUpdateProduct_API } from '../Redux/Action/ActionProduct';
import { actionFetchListCategoryAPI } from '../Redux/Action/ActionCategory';
import { actionFetchListManufactureAPI } from '../Redux/Action/ActionManufacture';
import ModelUpdateNewProduct from '../ComponentProduct/Product/ModelUpdateNewProduct';
import { actionCloseInputFormUpdate, actionShowInputFormUpdate } from '../Redux/Action/ActionFormUpdate';
import { useNavigate } from 'react-router-dom';

function ProductPageContainer(props) {
    //* khai bao xu ly logic

    //Todo khai bao ham dispatch de gui du lieu len store
    let dispatchRedux = useDispatch();

    //Todo xu ly trang thai open model create
    const onHandleClickButton = () => {
        dispatchRedux(actionShowInputForm());
    }

    //Todo xu ly trang thai close model create
    const onHandleCloseButton = () => {
        dispatchRedux(actionCloseInputForm());
    }

    //Todo xu ly trang thai close model update
    const onHandleCloseEdit = () => {
        dispatchRedux(actionCloseInputFormUpdate())
    }

    // Todo khai bao useEffect de load du lieu tu local srorage vao state listProduct
    useEffect(() => {

        // call api
        dispatchRedux(actionFetchListProductAPI())
        dispatchRedux(actionFetchListCategoryAPI())
        dispatchRedux(actionFetchListManufactureAPI());

    }, [])

    //Todo khai bao ham callback de nhan du lieu product can them moi
    const onHandleCreateNewProduct = (productNewParam) => {

        let productNewParam_API = {
            name: productNewParam.name,
            price: productNewParam.price,
            color: productNewParam.color,
            manufactureId: productNewParam.manufacture,
            categoryId: productNewParam.category,
            image: productNewParam.image,
            star: productNewParam.star
        }

        dispatchRedux(actionAddProduct_API(productNewParam_API));

        dispatchRedux(actionCloseInputForm());

    }

    //Todo khai bao ham delete Product
    const ondeleteProduct = (idDelete) => {
        dispatchRedux(actionDeleteProduct_API(idDelete));
    }

    //Todo khai bao ham edit product
    const onHandleClickEdit = (product) => {
        dispatchRedux(actionShowInputFormUpdate());
        dispatchRedux(actionEditProduct(product))
    }

    //Todo khai bao ham update Product
    const onhandleUpdate = (productUpdate) => {
        let productNewParam_Update = {
            id: productUpdate.id,
            name: productUpdate.name,
            price: productUpdate.price,
            color: productUpdate.color,
            manufactureId: productUpdate.manufacture,
            categoryId: productUpdate.category,
            image: productUpdate.image,
            star: productUpdate.star
        }

        dispatchRedux(actionUpdateProduct_API(productNewParam_Update));
        dispatchRedux(actionCloseInputFormUpdate());
    }

    //Todo xu ly trang thai login
    // khai bao hook chuyen link
    let navigate = useNavigate();

    useEffect(() => {
        let user_login = JSON.parse(localStorage.getItem("user_login"));
        if (!user_login) {
            // TH này khi User chua login sẽ chuyển tới trang login
            return navigate("/login");
        }
    }, [])

    return (
        <div>
            <Container style={{ marginTop: "150px" }}>
                <CreateButton onHandleClickButton={onHandleClickButton} />
                <ModelCreateNewProduct onHandleCloseButton={onHandleCloseButton} onHandleCreateNewProduct={onHandleCreateNewProduct} />
                <ResultForm ondeleteProduct={ondeleteProduct} onHandleClickEdit={onHandleClickEdit} />
                <ModelUpdateNewProduct onHandleCloseEdit={onHandleCloseEdit} onhandleUpdate={onhandleUpdate} />
            </Container>
        </div>
    );
}

export default ProductPageContainer;