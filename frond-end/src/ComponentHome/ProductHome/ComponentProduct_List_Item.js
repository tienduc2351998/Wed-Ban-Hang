import React from 'react';
import '../../ComponentHome/ProductHome_CSS/ComponentProduct_List_Item.css'
import { Col } from "reactstrap";
import ComponentProduct_List_Item_Star from './ComponentProduct_List_Item_Star';
import { Link } from 'react-router-dom';

function ComponentProduct_List_Item({ id, name, manufactureName, price, color, image, categoryName, star }) {

    return (
        <Col lg={2} xl={3} md={2} sm={5}>
            <div className='product'>

                <div className="product_img">
                    <img className="product__img" src={image} alt="no_image" />
                </div>

                <ComponentProduct_List_Item_Star star={star} />

                <p className="product__name">- Tên Sản Phẩm: {name}</p>
                <p className="product_name">- Nhà Sản Xuất: {manufactureName}</p>
                <p className="product_name">- Loại Sản Phẩm: {categoryName}</p>
                <p className="product_name">- Màu sắc: {color}</p>
                <p className="product_price">- Gia: {price} đ</p>
                <Link to={`/${id}`}><p className="product_link">* LINK CHI TIẾT</p></Link>
            </div>
        </Col>
    );
}

export default ComponentProduct_List_Item;