import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { getNowDate } from '../../Utils/GetNowDate';

function InputFormUpdate({ onhandleUpdate }) {

    // Khai báo State lưu trữ giá trị của các ô nhập liệu
    let [Name, setName] = useState("");
    let [Price, setPrice] = useState("");
    let [Color, setColor] = useState("");
    let [Manufacture, setManufacture] = useState("");
    let [Category, setCategory] = useState("");
    let [Image, setImage] = useState("");
    let [Star, setStar] = useState("");

    // lay state du lieu trong store
    let stateRedux = useSelector((stateRedux) => stateRedux);
    let listManufacture = stateRedux.listManufactureState.listManufacture;
    let listCategory = stateRedux.listCategoryState.listCategory;
    // lay ra obj product khi an nut edit reong store
    let stateProductUpdateRedux = stateRedux.listProductState.productToUpdate

    // hien thi danh sach manufacture
    let rowManufacture = listManufacture.map((manufacture, index) => {
        return <option value={manufacture.id} key={index}>{manufacture.name}</option>
    })

    // hien thi danh sach category
    let rowCategory = listCategory.map((category, index) => {
        return <option value={category.id} key={index}>{category.name}</option>
    })

    // hien thi du lieu lod tren o input
    useEffect(() => {
        setName(stateProductUpdateRedux.name);
        setPrice(stateProductUpdateRedux.price);
        setColor(stateProductUpdateRedux.color);
        setImage(stateProductUpdateRedux.image);
        setStar(stateProductUpdateRedux.star);

        // lay id manufacture
        let manufactureId = listManufacture.find((manufacture) => manufacture.name === stateProductUpdateRedux.manufactureName).id
        setManufacture(manufactureId);

        // lay id category
        let categoryId = listCategory.find((category) => category.name === stateProductUpdateRedux.categoryName).id
        setCategory(categoryId);
    }, [])

    // xu li button update
    const handleUpdate = () => {

        let productUpdate = {
            id: stateProductUpdateRedux.id,
            name: Name,
            price: Price,
            color: Color,
            manufacture: Manufacture,
            category: Category,
            image: Image,
            star: Star,
            createDate: getNowDate()
        }

        // console.log("manufactureId", productUpdate.manufactureId);
        onhandleUpdate(productUpdate)
    }

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
                        value={Name}
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
                        value={Price}
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
                        value={Color}
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
                        value={Image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </FormGroup>
            </Form>

            {/* Manufacture */}
            <FormGroup>
                <Label for="Manufacture">Chọn nhà sản xuất: </Label>
                <Input id="Manufacture"
                    name="Manufacture"
                    type="select"
                    value={Manufacture}
                    onChange={(e) => setManufacture(e.target.value)}
                >
                    {rowManufacture}

                </Input>
            </FormGroup>

            {/* Category */}
            <FormGroup>
                <Label for="Category">Chọn loại sản phẩm: </Label>
                <Input id="Category"
                    name="Category"
                    type="select"
                    value={Category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {rowCategory}

                </Input>
            </FormGroup>

            {/* Star */}
            <FormGroup>
                <Label for="Star">Chọn số sao (1-5): </Label>
                <Input id="Star"
                    name="Star"
                    type="select"
                    value={Star}
                    onChange={(e) => setStar(e.target.value)}
                >
                    <option value={"1"}>1- star</option>
                    <option value={"2"}>2- star</option>
                    <option value={"3"}>3- star</option>
                    <option value={"4"}>4- star</option>
                    <option value={"5"}>5- star</option>
                </Input>
            </FormGroup>

            <Button color="primary" onClick={handleUpdate}>Update</Button>
            <Button color="danger">Reset</Button>

        </Container >
    );
}

export default InputFormUpdate;