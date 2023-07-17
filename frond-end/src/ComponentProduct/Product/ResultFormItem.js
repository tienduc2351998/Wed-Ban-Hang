import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from "reactstrap";

function ResultFormItem({ ondeleteProduct, onHandleClickEdit }) {

    // khai baos bien items de hien thi du lieu
    let items = "";

    // su dung useSelector de lay listAccount
    let listProduct = useSelector((stateRedux) => stateRedux.listProductState.listProduct)

    // khai bao ham delete
    let handleDelete = (id) => {
        ondeleteProduct(id)
    }

    // khai bao ham edit
    let handleEdit = (product) => {
        onHandleClickEdit(product)
    }

    // Kiểm tra nếu listProduct !="" sẽ hiển thị dữ liệu
    if (listProduct) {
        items = listProduct.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.color}</td>
                    <td>{product.manufactureName}</td>
                    <td>{product.categoryName}</td>
                    <td>{product.star}</td>
                    <td>{product.createDate}</td>
                    <td> <Button color="warning" onClick={() => handleEdit(product)}>Edit</Button></td>
                    <td> <Button color="danger" onClick={() => handleDelete(product.id)}>Delete</Button></td>
                </tr>
            );
        })
    }

    return items;
}

export default ResultFormItem;