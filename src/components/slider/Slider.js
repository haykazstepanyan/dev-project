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
    };

    return (
        <div className="slide-container" style={{ width: "100%",margin:"40px 0px" }}>
            <Slide {...properties}>
                {props.sliderData.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div>
                            <img src={slideImage.url} alt="slide-img" />
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Slider;
