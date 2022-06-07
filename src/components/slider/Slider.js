import React from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = (props) => {
    const properties = {
        transitionDuration: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div
            className="slide-container"
            style={{ width: "100%", margin: "40px 0px" }}
        >
            <Slide {...properties}>
                {props.sliderData.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div className="text-center">
                            <img src={slideImage.url} alt="slide-img" />
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Slider;
