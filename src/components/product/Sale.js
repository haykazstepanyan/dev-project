import PropTypes from "prop-types";
import { saleStyles } from "./styles";

function Sale({ discount }) {
  const classes = saleStyles();
  return (
    <div className={classes.sale}>
      <span>-{discount} %</span>
    </div>
  );
}

Sale.propTypes = {
  discount: PropTypes.number.isRequired,
};

export default Sale;
