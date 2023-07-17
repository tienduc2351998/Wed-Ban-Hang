import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { generateId } from "../../Utils/Generate_Id";
import { getNowDate } from "../../Utils/GetNowDate";
import { useSelector } from 'react-redux';

function InputForm({ onHandleCreateNewProduct }) {

    // khai bao cac state de luu tru du lieu nguoi dung nhap trong cac o nhap lieu
    let [Name, setName] = useState("");
    let [Price, setPrice] = useState("");
    let [Color, setColor] = useState("");
    let [Manufacture, setManufacture] = useState("");
    let [Category, setCategory] = useState("");
    let [Image, setImage] = useState("");
    let [Star, setStar] = useState("");

    const handleClickCreate = () => {
        let productNew = {
            id: generateId(),
            name: Name,
            price: Price,
            color: Color,
            manufacture: Manufacture,
            category: Category,
            image: Image,
            star: Star,
            createDate: getNowDate()
        }

        onHandleCreateNewProduct(productNew);
    }

    // khai bao hook useSelecter de lay state tu kho store cua redux
    let stateRedux = useSelector((stateRedux) => stateRedux);
    let listManufacture = stateRedux.listManufactureState.listManufacture;
    let listCategory = stateRedux.listCategoryState.listCategory;

    // hien thi danh sach Category
    let rowCategory = listCategory.map((category, index) => {
        return <option value={category.id} key={index}>{category.name}</option>
    })

    // hien thi danh sach Manufacture
    let rowManufacture = listManufacture.map((manufacture, index) => {
        return <option value={manufacture.id} key={index}>{manufacture.name}</option>
    })


    return (
        <Container>

            <Form>
                <FormGroup>
                    <Label for="Name">Tên sản phẩm: </Label>
                    <Input
                        id="Name"
                        name="Name"
                        placeholder="Nhập tên sản phẩm"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormGroup>
            </Form>

            <Form>
                <FormGroup>
                    <Label for="Price">Gía sản phẩm: </Label>
                    <Input
                        id="Price"
                        name="Price"
                        placeholder="Nhập giá sản phẩm"
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </FormGroup>
            </Form>

            <Form>
                <FormGroup>
                    <Label for="Color">Màu sắc: </Label>
                    <Input
                        id="Color"
                        name="Color"
                        placeholder="nhập màu sản phẩm"
                        type="text"
                        onChange={(e) => setColor(e.target.value)}
                    />
                </FormGroup>
            </Form>

            <Form>
                <FormGroup>
                    <Label for="Image">Nhập tên ảnh: </Label>
                    <Input
                        id="Image"
                        name="Image"
                        placeholder="Nhập tên ảnh sản phẩm"
                        type="text"
                        onChange={(e) => setImage(e.target.value)}
                    />
                </FormGroup>
            </Form>

            {/* <Form>
                <FormGroup>
                    <Label for="Image">Chọn ảnh: </Label>
                    <Input
                        id="Image"
                        name="Image"
                        placeholder="Input Image"
                        type="file"
                        onChange={(e) => setImage(e.target.files[0].name)}
                    />
                </FormGroup>
            </Form> */}

            {/* Manufacture */}
            <FormGroup>
                <Label for="Manufacture">Chọn nhà sản xuất: </Label>
                <Input id="Manufacture"
                    name="Manufacture"
                    type="select"
                    onChange={(e) => setManufacture(e.target.value)}>
                    {/* <option value={"SamSung"}>SamSung</option>
                    <option value={"iPhone"}>iPhone</option>
                    <option value={"Oppo"}>Oppo</option>
                    <option value={"Xiaomi"}>Xiaomi</option>
                    <option value={"Acer"}>Acer</option>
                    <option value={"Dell"}>Dell</option>
                    <option value={"MSI"}>MSI</option>
                    <option value={"Casio"}>Casio</option>
                    <option value={"Canon"}>Canon</option>
                    <option value={"Hp"}>Hp</option> */}

                    {rowManufacture}
                </Input>
            </FormGroup>

            {/* Category */}
            <FormGroup>
                <Label for="Category">Chọn loại sản phẩm: </Label>
                <Input id="Category"
                    name="Category"
                    type="select"
                    onChange={(e) => setCategory(e.target.value)}>
                    {/* <option value={"Dien thoai"}>Điện thoại</option>
                    <option value={"May tinh"}>Máy Tính</option>
                    <option value={"Tai nghe"}>Tai nghe</option>
                    <option value={"Dong ho"}>Đồng hồ</option>
                    <option value={"Tablet"}>Tablet</option> */}

                    {rowCategory}
                </Input>
            </FormGroup>

            {/* Star */}
            <FormGroup>
                <Label for="Star">Chọn số sao (1-5): </Label>
                <Input id="Star"
                    name="Star"
                    type="select"
                    onChange={(e) => setStar(e.target.value)}>
                    <option value={"1"}>1- star</option>
                    <option value={"2"}>2- star</option>
                    <option value={"3"}>3- star</option>
                    <option value={"4"}>4- star</option>
                    <option value={"5"}>5- star</option>
                </Input>
            </FormGroup>

            <Button color="primary" onClick={handleClickCreate}>Create</Button>
            <Button color="danger">Reset</Button>

        </Container >
    );
}

export default InputForm;