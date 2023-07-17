import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ComponentAboutHeader(props) {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://a-static.besthdwallpaper.com/spider-man-no-way-home-spider-man-movie-wallpaper-3840x2160-87543_54.jpg"
                    alt="First slide"
                    style={{ height: "800px" }}
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images7.alphacoders.com/325/325147.jpg"
                    alt="Second slide"
                    style={{ height: "800px" }}
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/861755.jpg"
                    alt="Third slide"
                    style={{ height: "800px" }}
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ComponentAboutHeader;