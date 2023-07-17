import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Button, InputGroup, Input, FormGroup, Label } from 'reactstrap';
import { actionFetchFilterProductAPI, actionFetchListProductAPI, actionFetchSearchProductAPI, actionFetchSortProductAPI } from '../../Redux/Action/ActionProduct';


function ComponentFilter(props) {

    //Todo khai bao useDispatch de gui du lieu len Store
    let dispatchRedux = useDispatch();

    let filterItem = (categoryItem) => {
        dispatchRedux(actionFetchFilterProductAPI(categoryItem))
    }

    const AllItem = () => {
        dispatchRedux(actionFetchListProductAPI())
    }

    //todo khai bao state de luu tru gia tri o input search
    let [search, setSearch] = useState("");

    const handleSearch = (searchName) => {
        dispatchRedux(actionFetchSearchProductAPI(searchName))
    }

    //todo xu ly ham sort
    let [sort, setSort] = useState("")
    dispatchRedux(actionFetchSortProductAPI(sort))

    return (

        <Container style={{ backgroundColor: 'rgb(231, 225, 173)', marginBottom: '50px', borderRadius: '15px' }}>

            <Row style={{ paddingTop: '20px', marginLeft: '47px' }}>
                <Col sm={8}>
                    <InputGroup>
                        <Button onClick={() => handleSearch(search)} type="submit">Search</Button>
                        <Input
                            type='text'
                            value={search}
                            placeholder='Nhập tên sản phẩm'
                            onChange={(e) => setSearch(e.target.value)} />
                    </InputGroup>
                </Col>
                <Col sm={3}>
                    <FormGroup>
                        <Input id="Sort"
                            name="Sort"
                            type="select"
                            onChange={(e) => setSort(e.target.value)}>
                            <option value={""}>sắp xếp</option>
                            <option value={"price,desc"}>Giá cao đến thấp</option>
                            <option value={"price,asc"}>Giá thấp đến cao</option>

                        </Input>
                    </FormGroup>
                </Col>
            </Row>

            <Row style={{ marginTop: '20px', paddingBottom: '30px' }}>
                <Col sm={2}>
                    <Button color="primary" onClick={AllItem}>Tất cả</Button>
                </Col>

                <Col sm={2}>
                    <Button color="success" onClick={() => filterItem('Điện Thoại')}>Điện Thoại</Button>
                </Col>

                <Col sm={2}>
                    <Button color="success" onClick={() => filterItem('Máy Tính')}>Máy Tính</Button>
                </Col>

                <Col sm={2}>
                    <Button color="success" onClick={() => filterItem('Tai nghe')}>Tai nghe</Button>
                </Col>

                <Col sm={2}>
                    <Button color="success" onClick={() => filterItem('Đồng Hồ')}>Đồng Hồ</Button>
                </Col>

                <Col sm={2}>
                    <Button color="success" onClick={() => filterItem('Tablet')}>Tablet</Button>
                </Col>
            </Row>
        </Container>

    );
}

export default ComponentFilter;