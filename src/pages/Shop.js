import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Container from "@mui/system/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Pagination from "../components/pagination";
import Banner from "../components/common/Banner";
import ProductItem from "../components/product";
import ShopPageSidebar from "../components/sidebar/ShopPageSidebar";
import { shopStyles } from "./styles";
import useFetch from "../hooks/useFetch";
import { setLoader, setSnackbar } from "../redux/app/appSlice";
import { getWishlistData } from "../redux/wishlist/actions";

function Shop() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceSliderValues, setPriceSliderValues] = useState([0, 100]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("page") || 1);

  const dispatch = useDispatch();
  const classes = shopStyles();

  const wishlist = useSelector((state) => state.wishlist.wishlistData);
  const categories = useSelector((state) => state.categories.categories);

  // useEffect(() => {
  //   if (page === 1 && !searchParams.get("page")) {
  //     searchParams.append("page", 1);
  //     setSearchParams(searchParams);
  //   }
  // }, [page, searchParams, setSearchParams]);

  const setInitialBrandCategories = useCallback(() => {
    const defaultBrandParams = searchParams.getAll("brand");
    if (Array.isArray(defaultBrandParams)) {
      setSelectedBrands(defaultBrandParams.map((param) => +param));
    } else {
      setSelectedBrands([+defaultBrandParams]);
    }

    const defaultCategoryParams = searchParams.getAll("category");
    if (Array.isArray(defaultBrandParams)) {
      setSelectedCategories(defaultCategoryParams.map((param) => +param));
    } else {
      setSelectedCategories([+defaultCategoryParams]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setInitialMinMaxValues = useCallback(() => {
    const defaultMinValue = searchParams.get("min");
    const defaultMaxValue = searchParams.get("max");
    if (defaultMinValue) {
      setPriceSliderValues((prevState) => [defaultMinValue, prevState[1]]);
    }
    if (defaultMaxValue) {
      setPriceSliderValues((prevState) => [prevState[0], defaultMaxValue]);
    }
  }, []);

  useEffect(() => {
    setInitialBrandCategories();
  }, [setInitialBrandCategories]);

  useEffect(() => {
    setInitialMinMaxValues();
  }, [setInitialMinMaxValues]);

  const {
    data: brands,
    error: brandsError,
    loading: brandsLoading,
  } = useFetch("/brands");

  const {
    data: products,
    error: productsError,
    loading: productsLoading,
  } = useFetch(`/products/getShopProducts${window.location.search}`);

  const {
    data: highestPrice,
    error: highestPriceError,
    loading: highestPriceLoading,
  } = useFetch("/products/getHighestPrice");

  useEffect(() => {
    if (highestPriceLoading) {
      dispatch(setLoader({ key: "getHighestPrice" }));
    }
  }, [dispatch, highestPriceLoading]);

  useEffect(() => {
    if (highestPrice?.data || highestPriceError) {
      setPriceSliderValues((prevState) => [
        prevState[0],
        searchParams.get("max") || highestPrice?.data.price,
      ]);
      dispatch(setLoader({ key: "getHighestPrice" }));
    }
  }, [dispatch, highestPrice, highestPriceError]);

  useEffect(() => {
    if (brandsError || productsError) {
      dispatch(
        setSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [dispatch, brandsError, productsError]);

  useEffect(() => {
    if (productsLoading) {
      dispatch(setLoader({ key: "getFilteredProducts" }));
    }
  }, [dispatch, productsLoading]);

  useEffect(() => {
    if (products?.data || productsError) {
      dispatch(setLoader({ key: "getFilteredProducts" }));
    }
  }, [dispatch, products, productsError]);

  useEffect(() => {
    if (brandsLoading) {
      dispatch(setLoader({ key: "getBrands" }));
    }
  }, [dispatch, brandsLoading]);

  useEffect(() => {
    if (brands?.data || brandsError) {
      dispatch(setLoader({ key: "getBrands" }));
    }
  }, [dispatch, brands, brandsError]);

  const handleBrandCheckbox = (id) => {
    const selectedIndex = selectedBrands.indexOf(id);
    const newBrands = [...selectedBrands];

    if (selectedIndex === -1) {
      newBrands.push(id);
    } else {
      newBrands.splice(selectedIndex, 1);
    }

    const allBrandParams = searchParams.getAll("brand");

    if (allBrandParams.includes(String(id))) {
      searchParams.delete("brand");
      allBrandParams.forEach((param) => {
        if (param !== String(id)) {
          searchParams.append("brand", param);
        }
      });
    } else {
      searchParams.append("brand", id);
    }
    searchParams.delete("page");
    searchParams.append("page", 1);

    setPage(1);
    setSearchParams(searchParams);
    setSelectedBrands(newBrands);
  };

  useEffect(() => {
    dispatch(getWishlistData());
  }, [dispatch]);

  const handleCategoryCheckbox = (id) => {
    const selectedIndex = selectedCategories.indexOf(id);
    const newCategories = [...selectedCategories];

    if (selectedIndex === -1) {
      newCategories.push(id);
    } else {
      newCategories.splice(selectedIndex, 1);
    }

    const allCategoryParams = searchParams.getAll("category");

    if (allCategoryParams.length && allCategoryParams.includes(String(id))) {
      searchParams.delete("category");
      allCategoryParams.forEach((param) => {
        if (param !== String(id)) {
          searchParams.append("category", param);
        }
      });
    } else {
      searchParams.append("category", id);
    }

    searchParams.delete("page");
    searchParams.append("page", 1);

    setPage(1);
    setSearchParams(searchParams);
    setSelectedCategories(newCategories);
  };

  const gotoPage = (_, pageNum) => {
    if (pageNum === page) return;
    setPage(pageNum);
    searchParams.delete("page");
    searchParams.append("page", pageNum);
    setSearchParams(searchParams);
  };

  const handlePriceFiltering = () => {
    searchParams.delete("min");
    searchParams.delete("max");
    searchParams.delete("page");
    searchParams.append("page", 1);
    searchParams.append("min", priceSliderValues[0]);
    searchParams.append("max", priceSliderValues[1]);
    setSearchParams(searchParams);
  };

  const handleValueChange = (_, newValue) => {
    setPriceSliderValues(newValue);
  };

  const handleMinValueChange = (e) => {
    setPriceSliderValues((prevState) => [+e.target.value, prevState[1]]);
  };
  const handleMaxValueChange = (e) => {
    setPriceSliderValues((prevState) => [prevState[0], +e.target.value]);
  };

  return (
    <>
      <Banner name="Shop" />
      <Container maxWidth="lg">
        <Box mt={12.5}>
          <Grid container>
            <Grid item md={3}>
              {brands?.data && categories && (
                <ShopPageSidebar
                  brands={brands.data}
                  brandsChange={handleBrandCheckbox}
                  selectedBrands={selectedBrands}
                  categories={categories}
                  categoriesChange={handleCategoryCheckbox}
                  selectedCategories={selectedCategories}
                  filterByPrice={handlePriceFiltering}
                  values={priceSliderValues}
                  defaultMaxValue={highestPrice?.data?.price}
                  valueChange={handleValueChange}
                  minValueChange={handleMinValueChange}
                  maxValueChange={handleMaxValueChange}
                />
              )}
            </Grid>
            <Grid item md={9}>
              <Grid container className={classes.shopItemContainer}>
                {products?.data &&
                  wishlist &&
                  products.data.map(
                    ({ id, name, price, productImg, discount }) => (
                      <Grid item sm={4} key={id} className={classes.shopItem}>
                        <ProductItem
                          id={id}
                          title={name}
                          image={productImg}
                          price={price}
                          discount={discount}
                        />
                      </Grid>
                    ),
                  )}
              </Grid>
              {products?.dataCount ? (
                <Pagination
                  count={Math.ceil((products?.dataCount || 0) / 9)}
                  page={page}
                  onChange={gotoPage}
                />
              ) : null}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Shop;
