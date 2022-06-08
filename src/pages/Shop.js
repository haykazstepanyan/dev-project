import React, { useEffect, useState } from "react";
import PaginationBlock from "../components/pagination";
import Grid from "@mui/material/Grid";
import { getFakeProductsData } from "../helpers/api.helpers";
import Layout from "../layout";
import Banner from "../components/common/Banner";
import Container from "@mui/system/Container";
import { Link } from "react-router-dom";
import ProductItem from "../components/product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [productsbyPages, setProductsbyPages] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    getFakeProductsData().then((productsData) =>
      setProducts((prev) => [...prev, ...productsData])
    );
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setProductsbyPages([...products].slice(start, start + 9));
    }
  }, [products, start]);

  const gotoPage = (_, page) => {
    setStart(page * 9 - 9);
  };

  return (
    <>
      <Layout />
      <Banner name="Shop" />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={3}></Grid>
          <Grid item md={9}>
            <Grid container spacing={2}>
              {productsbyPages &&
                productsbyPages.map(({ id, title, images, price }) => (
                  <Grid item sm={4} key={id}>
                    <Link to={`/product/${id}`} style={{ margin: "15px" }}>
                      <ProductItem
                        title={title}
                        image={images[0]}
                        price={price}
                      />
                    </Link>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <PaginationBlock
        count={Math.ceil(products.length / 9)}
        onChange={gotoPage}
      />
    </>
  );
};
export default Shop;
