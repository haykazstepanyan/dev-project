import { createUseStyles } from "react-jss";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Product = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.productContainer}>
      <div>
        <img
          src={require(`../../assets/images/products/${data.image}`)}
          alt={data.title}
          className={classes.productImage}
        />
      </div>
      <div>
        <h2>{data.title}</h2>
      </div>
    </div>
  );
};
export default Product;
