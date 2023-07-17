import React from 'react';
import '../../ComponentHome/ProductHome_CSS/ComponentHeader.css'
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function ComponentHeader(props) {
    return (

        <Navbar bg="dark" expand="lg" style={{ height: '80px' }}>
            <Container>

                <Navbar.Brand href="#home" style={{ color: "red" }} >WED BÁN HÀNG</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link" style={{ color: "red", fontSize: '20px' }}>Home</Link>
                        <Link to="/about" className="nav-link" style={{ color: "red", fontSize: '20px' }}>About</Link>
                        <Link to="/contact" className="nav-link" style={{ color: "red", fontSize: '20px' }}>Contact</Link>
                        <Link to="/product" className="nav-link" style={{ color: "red", fontSize: '20px' }} >Product_Page</Link>
                        <Link to="/news" className="nav-link" style={{ color: "red", fontSize: '20px' }} >News</Link>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end">
                    <Link to="/login" ><button style={{ backgroundColor: "orange" }}>Login <i className="fa fa-sign-in"></i> </button></Link>
                    <Link to="/register" ><button style={{ marginLeft: '10px', backgroundColor: "orange" }}>Register <i className="fa fa-registered"></i></button></Link>
                    <Link to="/cart">
                        <i class="fa fa-shopping-cart" style={{ marginLeft: '10px', fontSize: '25px', backgroundColor: "orange" }}></i>
                    </Link>
                </Navbar.Collapse>

            </Container>
        </Navbar>

    );
}

export default ComponentHeader;