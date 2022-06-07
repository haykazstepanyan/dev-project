import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createUseStyles } from "react-jss";

const slickSliderStyles = createUseStyles({
    slickSlider: {
        "& div:focus-visible": {
            outline: "none",
        },
        "& img": {
            margin: "auto",
        },
        "& .slick-arrow.slick-next:before": {
            color: "#6b6b6b",
        },
        "& .slick-arrow.slick-prev:before": {
            color: "#6b6b6b",
        },
    },
});

export default function SlickSlider(props) {
    const classes = slickSliderStyles();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: props.slidesToShow,
        slidesToScroll: props.slidesToScroll,
        arrows: true,
        ...(props.responsive
            ? {
                  responsive: [
                      {
                          breakpoint: 1024,
                          settings: {
                              slidesToShow: 4,
                              slidesToScroll: 1,
                              infinite: true,
                          },
                      },
                      {
                          breakpoint: 600,
                          settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1,
                              initialSlide: 2,
                          },
                      },
                      {
                          breakpoint: 480,
                          settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                          },
                      },
                  ],
              }
            : {}),
    };

    return (
        <div className={classes.slickSlider}>
            <Slider {...settings}>
                {props.sliderData.map((slideImage, index) => (
                    <div key={index}>
                        <img src={slideImage.url} alt="slide-img" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
