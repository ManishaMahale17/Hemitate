import React from 'react'
import data from "../../../shared/constant/imagesData";
import Carousel from 'react-bootstrap/Carousel';
const CarouselDash = () => {
    return (
        <div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100  h-500 imgs"
                        src={data.image7}
                        alt="First slide"
                    />
                     
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgs "
                        src={data.image2}
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  imgs"
                        src={data.image1}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  imgs"
                        src={data.image4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100   imgs"
                        src={data.image6}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  imgs"
                        src={data.image5}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default CarouselDash
