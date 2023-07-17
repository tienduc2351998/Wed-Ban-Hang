import React from 'react';
import { Container, Table } from "reactstrap";
import ResultFormItem from './ResultFormItem';

function ResultForm({ ondeleteProduct, onHandleClickEdit }) {
    return (
        <Container>

            <h3>DANH SÁCH SẢN PHẨM</h3>

            <Table striped style={{ marginTop: '50px' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Gía</th>
                        <th>Màu sắc</th>
                        <th>Nhà sản xuất</th>
                        <th>Loại sản phẩm</th>
                        <th>Sao</th>
                        <th>Create_Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <ResultFormItem ondeleteProduct={ondeleteProduct} onHandleClickEdit={onHandleClickEdit} />
                </tbody>

            </Table>

        </Container>
    );
}

export default ResultForm;