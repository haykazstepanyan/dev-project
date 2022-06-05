import React, { useEffect, useState } from "react";
import CardBlock from "./Card";
import PaginationBlock from "../Pagination/Pagination";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  gridContainer: {
    marginTop: 50,
  },
});

async function getFakeProductsData() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  console.log(data.products);
  return data.products;
}
getFakeProductsData();

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productsbyPages, setProductsbyPages] = useState([]);
  const [start, setStart] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    getFakeProductsData().then((productsData) =>
      setProducts((prev) => [...prev, ...productsData])
    );
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setProductsbyPages([...products].slice(start, start + 8));
    }
  }, [products, start]);

  const gotoPage = (event, page) => {
    console.log(event, page);
    setStart(page * 8 - 8);
  };
  return (
    <>
      <Box m={4} pt={3}>
        <Grid
          className={classes.gridContainer}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {productsbyPages &&
            productsbyPages.map((item) => (
              <Grid item xs={3} key={item.id}>
                <CardBlock
                  id={item.id}
                  name={item.brand}
                  price={item.price}
                  image={item.images[0]}
                />
              </Grid>
            ))}
        </Grid>
        <PaginationBlock
          count={Math.ceil(products.length / 5)}
          onChange={gotoPage}
        />
      </Box>
    </>
  );
};
export default Products;
