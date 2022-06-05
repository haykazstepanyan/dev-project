import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import aboutMainImage from "../assets/images/about1.webp";
import featuresBgImage from "../assets/images/about-us-policy-bg.webp";
import featureIcon1 from "../assets/images/About_icon1.webp";
import featureIcon2 from "../assets/images/About_icon2.webp";
import featureIcon3 from "../assets/images/About_icon3.webp";
import featureIcon4 from "../assets/images/about2.webp";
import featureIcon5 from "../assets/images/about3.webp";
import featureIcon6 from "../assets/images/about4.webp";
import Slider from "../components/slider/Slider";
import slideImg1 from "../assets/images/brand1.webp";
import slideImg2 from "../assets/images/brand2.webp";
import slideImg3 from "../assets/images/brand3.webp";
import slideImg4 from "../assets/images/brand4.webp";
import slideImg5 from "../assets/images/brand5.webp";

const slideImages = [
    {
        url: `${slideImg1}`,
        caption: "Slide 1",
    },
    {
        url: `${slideImg2}`,
        caption: "Slide 2",
    },
    {
        url: `${slideImg3}`,
        caption: "Slide 3",
    },
    {
        url: `${slideImg4}`,
        caption: "Slide 4",
    },
    {
        url: `${slideImg5}`,
        caption: "Slide 5",
    },
];

const About = () => {
    return (
        <>
            <div className="about-us-section-header">
                <div>
                    <h1>About Us</h1>
                    <div>
                        <Link to="/">Home</Link> / About us
                    </div>
                </div>
            </div>
            <div className="about-us-info-section">
                <Grid container spacing={2}>
                    <Grid item xs={11} lg={9} md={10} className="mx-auto">
                        <img
                            src={aboutMainImage}
                            alt="about-us"
                            className="w-100"
                        />
                    </Grid>
                    <Grid item xs={11} lg={8} md={10} className="mx-auto">
                        <p className="about-info-title">
                            We Are A Digital Agency Focused On Delivering
                            Content And Utility User-Experiences.
                        </p>
                        <p className="about-info-text">
                            Adipiscing lacus ut elementum, nec duis, tempor
                            litora turpis dapibus. Imperdiet cursus odio tortor
                            in elementum. Egestas nunc eleifend feugiat lectus
                            laoreet, vel nunc taciti integer cras. Hac pede dis,
                            praesent nibh ac dui mauris sit. Pellentesque mi,
                            facilisi mauris, elit sociis leo sodales accumsan.
                            Iaculis ac fringilla torquent lorem consectetuer,
                            sociosqu phasellus risus urna aliquam, ornare.
                        </p>
                    </Grid>
                </Grid>
            </div>
            <div
                style={{ backgroundImage: `url(${featuresBgImage})` }}
                className="feature-bg-image-style"
            >
                <Container maxWidth="lg" className="features-section-style">
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={4}>
                            <div className="text-center">
                                <img alt="feature-img" src={featureIcon1} />
                                <p className="about-info-title">
                                    Creative Design
                                </p>
                                <p className="about-info-text">
                                    Erat metus sodales eget dolor consectetuer,
                                    porta ut purus at et alias, nulla ornare
                                    velit amet
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <div className="text-center">
                                <img alt="feature-img" src={featureIcon2} />
                                <p className="about-info-title">
                                    100% Money Back Guarantee
                                </p>
                                <p className="about-info-text">
                                    Erat metus sodales eget dolor consectetuer,
                                    porta ut purus at et alias, nulla ornare
                                    velit amet
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <div className="text-center">
                                <img alt="feature-img" src={featureIcon3} />
                                <p className="about-info-title">
                                    Online Support 24/7
                                </p>
                                <p className="about-info-text">
                                    Erat metus sodales eget dolor consectetuer,
                                    porta ut purus at et alias, nulla ornare
                                    velit amet
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div>
                <Container maxWidth="lg" className="features-section-style">
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={4} md={4} sm={6}>
                            <div className="text-center">
                                <img
                                    alt="feature-img"
                                    src={featureIcon4}
                                    className="w-100"
                                />
                                <p className="about-info-title">
                                    What Do We Do?
                                </p>
                                <p className="about-info-text">
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={4} md={4} sm={6}>
                            <div className="text-center">
                                <img
                                    alt="feature-img"
                                    src={featureIcon5}
                                    className="w-100"
                                />
                                <p className="about-info-title">Our Mission</p>
                                <p className="about-info-text">
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={4} md={4} sm={6}>
                            <div className="text-center">
                                <img
                                    alt="feature-img"
                                    src={featureIcon6}
                                    className="w-100"
                                />
                                <p className="about-info-title">
                                    History Of Us
                                </p>
                                <p className="about-info-text">
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Container maxWidth="lg">
                <Slider sliderData={slideImages} />
            </Container>
        </>
    );
};

export default About;
