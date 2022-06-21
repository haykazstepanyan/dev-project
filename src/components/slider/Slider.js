import PropTypes from "prop-types";
import Slider from "react-slick";
import { createUseStyles } from "react-jss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function SlickSlider({
  slidesToShow,
  slidesToScroll,
  responsive,
  sliderData,
  homeSlide,
}) {
  const classes = slickSliderStyles();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    arrows: true,
    ...(responsive
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

  if (homeSlide === true) {
    return (
      <div className={classes.slickSlider}>
        <Slider {...settings}>
          {sliderData.map((slideImage) => (
            <div key={slideImage.url}>
              <img src={slideImage.url} alt="slide-img" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  return (
    <div className={classes.slickSlider}>
      <Slider {...settings}>
        {sliderData.map((slideImage) => (
          <div key={slideImage.url}>
            <img src={slideImage.url} alt="slide-img" />
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
  homeSlide: PropTypes.bool,
};

export default SlickSlider;
