import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import ComponentAboutHeader from './ComponentAboutHeader';

function ComponentAbout(props) {
    return (
        <div>
            <ComponentAboutHeader />

            <Container style={{ marginTop: '50px' }}>
                <Row>

                    <Col sm={6} style={{ textAlign: "left" }}>
                        <h1>Giới thiệu sản phẩm</h1>
                        <p className="lead">
                            Nếu bạn lựa chọn điện thoại Samsung để chơi game, hoặc đáp ứng các nhu cầu cao, thì đây là một lựa chọn thích hợp, vì Samsung sở hữu cấu hình cao, phần mềm được tối ưu đem đến hiệu năng ổn định và mượt mà nhất
                            .Điển hình có thể kể đến như Samsung Galaxy S23 5G, Samsung Galaxy S23 Plus 5G hay Samsung Galaxy S23 Ultra 5G 256GB
                            Samsung trang bị cho các dòng điện thoại của hãng chíp xử lý Exynos có hiệu năng cao, mạnh mẽ đáp ứng mọi nhu cầu của người dùng điện thoại.
                            Samsung có lẽ là một thương hiệu điện thoại luôn phát triển camera có khẩu độ lớn nhất, từ khẩu độ f/1.5 trên Galaxy S9+ cao cấp có mức giá cao,
                            đến các dòng điện thoại tầm trung như Galaxy J7 Pro cũng được trang bị camera có khẩu độ lớn f/1.7.
                            Và với khẩu độ lớn, thực sự mang lại lợi ích rất lớn cho khả năng chụp hình của máy.
                        </p>
                        <div><h4 style={{ color: "red" }}>Link đóng góp ý kiến:</h4>
                            <Link to='/contact'><button>Hòm thư gửi Email</button></Link>
                        </div>
                    </Col>

                    <Col sm={6}>
                        <img src="https://znews-photo.zingcdn.me/w660/Uploaded/mdf_qsklky/2017_11_21/1_10_smartphone_chup_anh_dep_nhat_hien_nay.jpg"
                            alt="no_image"
                            style={{ height: "500px", width: "500px" }} />
                    </Col>

                </Row>

                <br /><br />
                <Row style={{ display: "flex", justifyContent: 'center' }}>
                    <img src="https://cdn.tgdd.vn/Files/2018/05/10/1087515/ro-ri-hinh-anh-chiec-dien-thoai-gap-man-hinh-doc-dao-cua-samsung-3.jpg"
                        alt="no_image"
                        style={{ height: "400px", width: "900px" }} />

                </Row>

                <br /><br />
                <Row style={{ textAlign: "left" }}>
                    <p className="lead">
                        Điện thoại thông minh là những chiếc điện thoại được cài sẵn hệ điều hành. Chúng có thể đồng bộ hóa dữ liệu với máy tính, laptop, ra lệnh bằng giọng nói với trí thông minh nhân tạo, điều khiển nhà thông minh và các thiết bị điện tử khác.<br />
                        Ưu điểm:<br />
                        + Hỗ trợ tính năng cảm ứng, giúp bạn thao tác nhanh, nhạy và dễ dàng hơn.<br />
                        + Trợ thủ đắc lực cho việc giải trí như chơi game, xem video, lướt web...<br />
                        + Có thể cài đặt các ứng dụng mà bạn quan tâm.<br />
                        + Điện thoại thông minh cho phép bạn chụp hình, quay video, lưu trữ hình ảnh trong thiết bị, chất lượng tương đối tốt.<br />
                        + Màn hình lớn, sắc nét dễ dàng cho làm việc, giải trí trên điện thoại.<br />
                        + Cho phép người dùng phóng to hay thu nhỏ để thoải mái khi chơi game.<br />
                        + Dễ dàng cho việc gọi điện video call với người thân, bạn bè.<br />
                        + Có khả năng đồng bộ hóa với một số phụ kiện hiện đại như: Tai nghe, bút cảm ứng.<br />
                    </p>
                </Row>
            </Container>

        </div>
    );
}

export default ComponentAbout;