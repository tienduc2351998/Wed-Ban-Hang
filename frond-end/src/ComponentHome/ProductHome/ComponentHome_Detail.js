import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import '../ProductHome_CSS/ComponentProduct_List_Item_Detail.css'
import { useDispatch } from 'react-redux';
import { addProductCart, deleteProductCart } from '../../Redux/Action/ActionCart';

function ComponentHome_Detail(props) {

    //Todo khai báo biến chuyển link theo id
    const params = useParams();

    //Todo khai bao listProduct de luu chuong trinh
    const [ProductDetail, setProductDetail] = useState({});

    //Todo callAPI listProduct theo Id
    function fetchListProduct() {
        axios.get(`http://localhost:8080/api/v1/products/${params.id}`).then((response) => {
            let listProduct_API = response.data;
            setProductDetail(listProduct_API);
        })
    }

    useEffect(() => {
        fetchListProduct();
    }, [params.id])

    //Todo: khai bao ham usedispatch len store
    let dispatchRedux = useDispatch();

    //Todo ham thay doi state button 
    let [cart, setCart] = useState("Add To Cart");

    let handleCart = (product) => {
        if (cart === "Add To Cart") {
            dispatchRedux(addProductCart(product))
            setCart("Remove From Cart")
        } else {
            dispatchRedux(deleteProductCart(product))
            setCart("Add To Cart")
        }
    }

    return (
        <Container style={{ marginTop: '50px' }}>

            <Row>
                <img src="https://www.xtmobile.vn/vnt_upload/news/11_2022/03/tt-btham1.png"
                    alt="no_image"
                    style={{ height: "400px", width: "100%" }} />
            </Row>

            <br /><br />
            <Row>
                <Col sm={6}>
                    <img src={ProductDetail.image} alt='no_image' className='productImg' />
                </Col>
                <Col sm={6} style={{ textAlign: 'left' }}>
                    <p className='productTitle'>Thông tin sản phẩm</p>
                    <p className='productName'>- Tên sản phẩm: {ProductDetail.name}</p>
                    <p className='productName'>- Nhà Sản Xuất: {ProductDetail.manufactureName}</p>
                    <p className='productName'>- Loại Sản Phẩm: {ProductDetail.categoryName}</p>
                    <p className='productName'>- Màu sắc: {ProductDetail.color}</p>
                    <p className='productName'>- Gia: {ProductDetail.price} đ</p>
                    <p className='product_Title'>Mô tả sản phẩm : thêm sau</p>
                    <Button color="secondary" onClick={() => handleCart(ProductDetail)}>{cart}</Button>
                </Col>
            </Row>

        </Container>
    );
}

export default ComponentHome_Detail;