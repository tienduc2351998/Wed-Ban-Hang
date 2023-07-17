import React from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import Data_Card_Items from './Data_Card_Items';

function ComponentNews(props) {
    return (
        <Container>
            <Row style={{ display: "flex", justifyContent: 'center', marginTop: '30px' }}>

                <h2> Twitter giới hạn số lượng bài viết người dùng đọc được trong ngày, lý do là đây ? </h2>
                <img src="https://cdn.tgdd.vn/Files/2023/07/02/1536654/twitter-tgdd-3231321313-thumb-1-020723-200849-800-resize.jpg"
                    alt="no_image"
                    style={{ height: "400px", width: "900px" }} />

            </Row>

            <br /><br />
            <Row style={{ textAlign: "left" }}>
                <p className="lead">
                    Trong một tweet mới, Elon Musk mô tả các giới hạn mới được điều chỉnh trên mạng xã hội Twitter. Những người sở hữu tài khoản xác minh có thể xem tối đa 6.000 bài viết hàng ngày, trong khi người dùng chưa được xác minh tài khoản sẽ chỉ được xem 600 bài viết trong 1 ngày.<br />
                    Còn đối với người dùng mới đăng ký, chưa được xác minh thì sẽ bị hạn chế còn chặt chẽ hơn là chỉ được xem 300 bài viết mỗi ngày, theo CEO của Tesla và SpaceX tuyên bố. Tuy nhiên sau đó, Elon Musk đã tăng giới hạn lên lần lượt là 10.000, 1.000 và 500 cho các loại tài khoản đã đề cập ở trên.<br />
                    Elon Musk nói rằng Twitter đang đối mặt với các mức độ nghiêm trọng khi bị lấy cắp dữ liệu từ nhiều tổ chức khác nhau, trong đó có cả việc bị can thiệp hệ thống của nền tảng mạng xã hội này. Ông cho biết rằng những hạn chế mới này là biện pháp cần thiết để kiềm chế những vấn đề cấp bách vừa nêu ra.<br />
                    Vị tỷ phú này trước đây đã bày tỏ lo ngại về việc bị lấy cắp dữ liệu trên Twitter và gợi ý rằng ông có thể ra tay chống lại những hành động xấu đó. Elon Musk cũng đã khá tức giận khi Microsoft sử dụng dữ liệu "trái phép" của Twitter và đe dọa rằng "đã đến lúc kiện tụng."<br />
                </p>

                <Col sm={2}>
                    <Button variant="primary">Xem chi tiết</Button>
                </Col>

            </Row>

            <br /><br />
            <Row>
                <h3 style={{ textAlign: "left", color: 'red' }}>Bản tin mới nhất **</h3>
                <Data_Card_Items />
            </Row>
        </Container>
    );
}

export default ComponentNews;