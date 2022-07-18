import { useState } from "react";
import PropTypes from "prop-types";
import defaultImg from "../../assets/images/default.png";

function ImageLoad({ src, alt }) {
  const [imgSrc, setImgSrc] = useState(defaultImg);

  return <img onLoad={() => setImgSrc(src)} src={imgSrc} alt={alt} />;
}

ImageLoad.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageLoad;
