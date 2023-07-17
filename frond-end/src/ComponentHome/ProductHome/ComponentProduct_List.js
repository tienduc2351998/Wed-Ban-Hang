import React from 'react';
import { Row } from "reactstrap";
import ComponentProduct_List_Item from './ComponentProduct_List_Item';
import { useSelector } from 'react-redux';

function ComponentProduct_List(props) {

    // su dung useSelector de lay listAccount
    let listProduct = useSelector((stateRedux) => stateRedux.listProductState.listProduct);

    return (
        <div>
            <Row>
                {listProduct.map((product) => <ComponentProduct_List_Item key={product.id} {...product} />)}
            </Row>
        </div>
    );
}

export default ComponentProduct_List;