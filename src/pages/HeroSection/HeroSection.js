import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../assets/banner/Banner-1.jpg';
import banner2 from '../../assets/banner/Banner-2.jpg';
import banner3 from '../../assets/banner/Banner-3.jpg';
const HeroSection = () => {
    return (
        <div className="banner ">
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide" height="400"
                        />
                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 " height="400"
                            src={banner2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 " height="400"
                            src={banner3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                       
                        </Carousel.Caption>

                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default HeroSection;