import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { deleteProductCart } from '../Redux/Action/ActionCart';
import { CloseButton } from "reactstrap";
import ComponentCartHeader from './ComponentCartHeader';
function ComponentCart(props) {

    //Todo lay state product "add to cart"
    const stateRedux = useSelector((stateRedux) => stateRedux.listProductCartState.listCart)

    //Todo khai bao useDispatch de xu ly action add & delete
    const dispatchRedux = useDispatch()

    let handleCloseCart = (itemCart) => {
        dispatchRedux(deleteProductCart(itemCart));
    }

    //Todo khai bao ham tinh tong so tien san pham trong gio hang
    const total = stateRedux.reduce((price, product) => {
        return price + product.price;
    }, 0)

    const cartItems = (items) => {
        return (
            <>
                <Container style={{ marginTop: '50px' }}>
                    <Row style={{ marginBottom: "15px" }} key={items.id}>
                        <CloseButton onClick={() => handleCloseCart(items)} />
                        <Col sm={4}>
                            <img src={items.image} alt='no_image' style={{ height: "230px", width: "180px" }} />
                        </Col>

                        <Col sm={4} style={{ textAlign: 'left' }}>
                            <h3>Tên sản phẩm: {items.name}</h3>
                            <p style={{ color: 'red', fontSize: '23px' }}>Giá: {items.price} đ</p>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

    return (
        <>
            <ComponentCartHeader />
            {stateRedux.map(cartItems)}
            <Container style={{ marginTop: '70px', marginBottom: '70px' }}>
                <h4 style={{ textAlign: 'left', color: 'blue' }}>Tổng số tiền sản phẩm: {total} đ</h4>
            </Container>
        </>
    )
}

export default ComponentCart;