import PropTypes from "prop-types";
import Slider from "react-slick";
import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";
import Button from "../button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slickSliderStyles = createUseStyles({
  slickSlider: {
    marginBottom: 80,
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
    "& .slick-arrow.slick-next": {
      position: "absolute",
      right: 30,
      top: "50%",
      transform: "translate(0, -50%)",
    },
    "& .slick-arrow.slick-prev": {
      zIndex: 9,
      position: "absolute",
      left: 30,
      top: "50%",
      transform: "translate(0, -50%)",
    },
  },
  homeSlider: {
    "& div:focus-visible": {
      outline: "none",
    },
    "& img": {
      margin: "auto",
    },
    "& .slick-arrow.slick-next:before": {
      color: `${colors.green}`,
    },
    "& .slick-arrow.slick-prev:before": {
      color: `${colors.green}`,
    },
    "& .slick-arrow.slick-next": {
      position: "absolute",
      right: 30,
      top: "50%",
      transform: "translate(0, -50%)",
    },
    "& .slick-arrow.slick-prev": {
      zIndex: 9,
      position: "absolute",
      left: 30,
      top: "50%",
      transform: "translate(0, -50%)",
    },
  },
  homePageSlider: {
    height: 600,
    width: "100%",
    objectFit: "cover",
  },
  positionRelative: {
    position: "relative",
  },
  sliderBlockStyle: {
    color: "#3c3b3b",
    position: "absolute",
    top: "50%",
    left: "10%",
    transform: "translate(0, -50%)",
    "& h1": {
      fontWeight: 500,
      fontSize: 63,
      marginBottom: 23,
      textTransform: "uppercase",
      letterSpacing: -2,
    },
    "& p": {
      fontSize: 20,
      fontWeight: 400,
      marginBottom: 30,
      "& span": {
        color: `${colors.green}`,
      },
    },
  },
});

function SlickSlider({
  slidesToShow,
  slidesToScroll,
  responsive,
  sliderData,
  arrows,
  page,
}) {
  const classes = slickSliderStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    ...(arrows ? { arrows: true } : { arrows: false }),
    ...(responsive
      ? {
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                ...(page === "home"
                  ? { slidesToShow: 1, slidesToScroll: 1 }
                  : { slidesToShow: 4, slidesToScroll: 1 }),
                infinite: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                ...(page === "home"
                  ? { slidesToShow: 1, slidesToScroll: 1 }
                  : { slidesToShow: 2, slidesToScroll: 1 }),
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                ...(page === "home" ? { arrows: false } : { arrows: true }),
              },
            },
          ],
        }
      : {}),
  };

  return (
    <div className={page === "home" ? classes.homeSlider : classes.slickSlider}>
      <Slider {...settings}>
        {sliderData.map((slideImage) => (
          <div
            key={slideImage.url}
            className={page === "home" ? classes.positionRelative : ""}
          >
            <img
              className={page === "home" ? classes.homePageSlider : ""}
              src={slideImage.url}
              alt="slide-img"
            />
            {page === "home" ? (
              <div className={classes.sliderBlockStyle}>
                <h1>TOP SALE</h1>
                <p>
                  Discount <span>20% Off </span> For Lukani Members{" "}
                </p>
                <Button size="large" borders="rounded">
                  Discover now
                </Button>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

SlickSlider.propTypes = {
  sliderData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  responsive: PropTypes.bool,
  arrows: PropTypes.bool,
  page: PropTypes.string,
};

export default SlickSlider;
