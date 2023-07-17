import React from 'react';
import { Container } from 'reactstrap';

function ComponentCartHeader(props) {
    return (
        <Container>
            <h2 style={{ textAlign: 'center', color: 'red', marginTop: '50px' }}>Sản phẩm trong giỏ hàng</h2>
            <img src="https://hoalinh.media/wp-content/uploads/2021/04/Quang-cao-Facebook-hieu-qua-cao-762x400.jpg"
                alt="no_image"
                style={{ height: "350px", width: "80%" }} />
        </Container>
    );
}

export default ComponentCartHeader;