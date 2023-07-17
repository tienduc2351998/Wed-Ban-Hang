import React from 'react';
import { Container, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';

function ComponentContact(props) {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <h1 style={{ textAlign: "center", marginTop: "50px" }}>Bạn muốn đóng góp ý kiến ?</h1>
                </Col>
            </Row>

            <Row style={{ marginTop: '50px' }}>

                <Col sm={4}>
                    <img src="https://blog.zetamail.vn/wp-content/uploads/2017/03/a.jpg"
                        alt="no_image"
                        height={"400px"} width={"400px"}></img>
                </Col>

                <Col sm={8} style={{ textAlign: 'left' }}>
                    <Form>
                        <FormGroup>
                            <Label for="FullName">Nhập tên của bạn: </Label>
                            <Input
                                id="FullName"
                                name="FullName"
                                placeholder="Nhập họ và tên"
                                type="text"
                            />
                        </FormGroup>
                    </Form>

                    <Form>
                        <FormGroup>
                            <Label for="Email">Nhập email của bạn: </Label>
                            <Input
                                id="Email"
                                name="Email"
                                placeholder="a.@gmail.com"
                                type="email"
                            />
                        </FormGroup>
                    </Form>

                    <Form>
                        <FormGroup>
                            <Label for="exampleText">Y kiến góp ý:</Label>
                            <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                                style={{ height: "100px" }}
                            />
                        </FormGroup>
                    </Form>

                    <Button color="secondary">Send Mail</Button>
                </Col>

            </Row>
        </Container >
    );
}

export default ComponentContact;