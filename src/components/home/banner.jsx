import React from 'react';
import Slider from 'react-slick';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import banner4 from '../../assets/banner4.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './banner.css'; // Import the custom CSS

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    return (
            <Slider {...settings} className="banner-slider h-[calc(100vh-220px)]">
                <div>
                    <img src={banner4} alt="Banner 1" className="w-full h-[calc(100vh-220px)] " />
                </div>
                <div>
                    <img src={banner3} alt="Banner 2" className="w-full h-[calc(100vh-220px)] " />
                </div>
                <div>
                    <img src={banner2} alt="Banner 3" className="w-full h-[calc(100vh-220px)] " />
                </div>
                <div>
                    <img src={banner1} alt="Banner 4" className="w-full h-[calc(100vh-220px)] " />
                </div>
            </Slider>
    );
};

export default Banner;
