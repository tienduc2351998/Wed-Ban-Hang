import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function ComponentRegister(props) {

    // khai baos state de nhap du lieu
    let [FullName, setFullName] = useState("");
    let [Email, setEmail] = useState("");
    let [Password, setPassword] = useState("");
    let [Birthday, setBirthday] = useState("");

    // khai bao hook naigate
    let navigate = useNavigate();

    let handleRegister = () => {

        let user = {
            fullName: FullName,
            email: Email,
            password: Password,
            birthday: Birthday,
        }

        // luu du lieu vao trong localStorage
        localStorage.setItem("user_LocalStorage", JSON.stringify(user));

        // chuyen den trang login
        navigate("/login")
    }

    return (
        <Container>
            <Row>
                <Col sm={12} style={{ textAlign: 'center', marginTop: '50px', color: 'orange' }}><h1>Trang đăng kí Tài khoản</h1></Col>
            </Row>

            <Row style={{ marginTop: '50px' }}>

                <Col sm={6}>
                    <img src="https://png.pngtree.com/png-clipart/20201209/original/pngtree-click-to-register-now-png-image_5657619.jpg"
                        alt="no_image"
                        style={{ height: "500px", width: "500px" }} />
                </Col>

                <Col sm={6} style={{ textAlign: 'left', height: "40px" }}>
                    <Form>
                        <FormGroup>
                            <Label for="FullName" style={{ color: 'red' }}>Nhập tên của bạn: </Label>
                            <Input
                                id="FullName"
                                name="FullName"
                                placeholder="Nhập họ và tên"
                                type="text"
                                value={FullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </FormGroup>
                    </Form>

                    <Form>
                        <FormGroup>
                            <Label for="Email" style={{ color: 'red' }}>Nhập email: </Label>
                            <Input
                                id="Email"
                                name="Email"
                                placeholder="Nhập email"
                                type="email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                    </Form>

                    <Form>
                        <FormGroup>
                            <Label for="Password" style={{ color: 'red' }}>Nhập password: </Label>
                            <Input
                                id="Password"
                                name="Password"
                                placeholder="Nhập Password"
                                type="password"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                    </Form>

                    <Form>
                        <FormGroup>
                            <Label for="Birthday" style={{ color: 'red' }}>Nhập ngày sinh: </Label>
                            <Input
                                id="Birthday"
                                name="Birthday"
                                placeholder="Chọn ngày/tháng/năm"
                                type="date"
                                value={Birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                            />
                        </FormGroup>
                    </Form>

                    <Button color="primary" onClick={handleRegister} >Đăng kí</Button>
                </Col>
            </Row>

        </Container>
    );
}

export default ComponentRegister;