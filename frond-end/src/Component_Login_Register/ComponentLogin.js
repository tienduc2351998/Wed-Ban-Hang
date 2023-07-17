import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function ComponentLogin(props) {
    // khai bao state Email, Password
    let [Email, setEmail] = useState("");
    let [Password, setPassword] = useState("");

    // khai bao hook useNavigate
    let navigate = useNavigate();

    let handleLogin = () => {

        // lay du lieu dang ki tu localStorage: kiem tra da dang ki tai chua
        let user_LocalStorage = JSON.parse(localStorage.getItem("user_LocalStorage"));

        // check
        if (!user_LocalStorage) {
            navigate("/register")
        } else {
            if (user_LocalStorage.email === Email && user_LocalStorage.password === Password) {
                alert("dang nhap thanh cong")
                let user_login = {
                    email: Email,
                    password: Password,
                }

                // neu dang nhap thanh cong thi luu thong tin user_login xuong local strogae
                localStorage.setItem("user_login", JSON.stringify(user_login));
                navigate("/product")
            } else {
                alert("kiem tra lai thong tin")
            }
        }
    }

    let handleRegister = () => {
        navigate("/register")
    }

    return (
        <Container>
            <Row>
                <Col sm={12} style={{ textAlign: 'center', marginTop: '50px', color: 'orange' }}><h1>Trang đăng nhập Tài khoản</h1></Col>
            </Row>

            <Row style={{ marginTop: '50px' }}>

                <Col sm={6}>
                    <img src="https://img.lovepik.com/element/45012/1913.png_860.png"
                        alt="no_image"
                        style={{ height: "500px", width: "500px" }} />
                </Col>

                <Col sm={6} style={{ textAlign: 'left', height: "40px" }}>

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

                    <Button color="primary" onClick={handleLogin} >Đăng nhập</Button>
                    <Button color="warning" onClick={handleRegister} >Đăng kí</Button>
                </Col>
            </Row>

        </Container>
    );
}

export default ComponentLogin;