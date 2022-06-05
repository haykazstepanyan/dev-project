import { createUseStyles } from "react-jss";
import { styles } from "./styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const useStyles = createUseStyles(styles);

const ProductItem = ({ data }) => {
  const classes = useStyles();
  return (
    <Card className={classes.productCard}>
      <CardMedia
        component="img"
        alt={data.title}
        height="180"
        image={require(`../../assets/images/products/${data.image}`)}
      />
      <CardContent>
        <Typography gutterBottom className={classes.productName}>
          {data.title}
        </Typography>
        <Typography className={classes.productPrice}>$ {data.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
