import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { useDispatch } from "react-redux";
import { ref, deleteObject } from "firebase/storage";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, MenuItem, Select, Tooltip } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Pagination from "../../../components/pagination/Pagination";
import { storage } from "../../../firebase/firebase";
import Button from "../../../components/button/Button";
import AdminProductsTable from "../../../components/adminProductsTable/AdminProductsTable";
import AdminProductsModal from "../../../components/adminProductsModal/AdminProductsModal";
import { showSnackbar } from "../../../redux/app/appSlice";
import useFetch from "../../../hooks/useFetch";
import useLazyFetch from "../../../hooks/useLazyFetch";
import Input from "../../../components/input";
import { adminGlobalStyles } from "../styles";
import useDebounce from "../../../hooks/useDebounce";

export default function Product() {
  const [open, setOpen] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("page") || 1);
  const [search, setSearch] = useState("");
  const [startToSearch, setStartToSearch] = useState(false);
  const [brandSelect, setBrandSelect] = useState(0);
  const [categorySelect, setCategorySelect] = useState(0);
  const debouncedSearch = useDebounce(search, 500);

  const classes = adminGlobalStyles();

  const { data: brands, error: brandsError } = useFetch("/brands");
  const { data: categories, error: categoriesError } = useFetch("/categories");
  const { error: addProductError, lazyRefetch: addProduct } = useLazyFetch();

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const {
    data: products,
    error: productsError,
    refetch: productFetch,
  } = useFetch(`/products/getShopProducts/admin${window.location.search}`);

  const dispatch = useDispatch();

  useEffect(() => {
    if (brandsError || productsError || categoriesError || addProductError) {
      dispatch(
        showSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [dispatch, brandsError, productsError, categoriesError, addProductError]);

  const gotoPage = (_, pageNum) => {
    setPage(pageNum);
    searchParams.delete("page");
    searchParams.append("page", pageNum);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (products?.data) {
      setProductsData(products.data);
    }
  }, [products]);

  useEffect(() => {
    if (startToSearch) {
      searchParams.delete("page");
      searchParams.set("keyword", debouncedSearch);
      setSearchParams(searchParams);
      setPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch, startToSearch]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (!startToSearch) {
      setStartToSearch(true);
    }
  };

  const addData = (value) => {
    addProduct(
      "/products/product",
      {
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      },
      "POST",
    ).then((e) => {
      if (e) {
        if (e?.data) {
          setProductsData((prev) => [...prev, e.data]);

          dispatch(
            showSnackbar({
              snackbarType: "success",
              snackbarMessage: "Product is added successfully!",
            }),
          );
          productFetch();
          handleClose();
        }
      }
    });
  };

  const setEditProductData = (value) => {
    const { id } = value;
    const newState = productsData.map((elem) =>
      elem.id === id ? value : elem,
    );
    setProductsData(newState);
    productFetch();
  };

  const setDeleteProductData = (value) => {
    const { id, productImg } = value;
    const newState = productsData.filter((elem) => elem.id !== id);
    setProductsData(newState);

    if (productImg !== "") {
      const pictureRef = ref(storage, productImg);
      deleteObject(pictureRef)
        .then(() => {})
        .catch(() => {
          dispatch(
            showSnackbar({
              snackbarType: "error",
              snackbarMessage: "Oops! Couldn't delete image",
            }),
          );
        });
    }

    productFetch();
  };

  const handleBrandSelect = (e) => {
    const { value } = e.target;

    console.log("brand - ", value);
    searchParams.delete("page");
    if (value) {
      searchParams.set("brand", value);
    } else {
      searchParams.delete("brand");
    }
    setPage(1);
    setSearchParams(searchParams);
    setBrandSelect(value);
  };

  const handleCategorySelect = (e) => {
    const { value } = e.target;
    console.log("category - ", value);
    searchParams.delete("page");
    if (value) {
      searchParams.set("category", value);
    } else {
      searchParams.delete("category");
    }
    setPage(1);
    setSearchParams(searchParams);
    setCategorySelect(value);
  };

  const categoriesLength = categories?.categories.length;
  const brandsLength = brands?.data.length;

  let disabled = true;

  if (categoriesLength && brandsLength) {
    disabled = false;
  }

  const brandOptions = brands?.data.length
    ? [{ id: 0, name: "All brands" }, ...brands.data]
    : [];
  const categoryOptions = categories?.categories.length
    ? [{ id: 0, name: "All categories" }, ...categories.categories]
    : [];

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: 20, marginBottom: 40 }}>
        {disabled ? (
          <Tooltip
            title="Please add at least one category or brand!!!"
            placement="top-start"
          >
            <div>
              <Button
                disabled={disabled}
                letter="capitalize"
                style={{ marginBottom: 20 }}
                page="admin"
                onClick={handleOpen}
                disableRipple
              >
                <AddIcon />
              </Button>
            </div>
          </Tooltip>
        ) : (
          <div className={classes.toolbar}>
            <Button
              disabled={disabled}
              letter="capitalize"
              page="admin"
              onClick={handleOpen}
              disableRipple
            >
              <AddIcon />
            </Button>
            <div className={classes.selects}>
              <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                <Select value={brandSelect} onChange={handleBrandSelect}>
                  {brandOptions.map(({ id, name }) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className={classes.selects}>
              <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
                <Select
                  value={categorySelect}
                  onChange={handleCategorySelect}
                  autoWidth
                >
                  {categoryOptions.map(({ id, name }) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className={classes.searchBox}>
              <Input
                type="text"
                placeholder="Search by name, description..."
                size="large"
                borders="square"
                state="noFocus"
                value={search}
                onChange={handleSearch}
              />
              <SearchIcon />
            </div>
          </div>
        )}
        {productsData && categories?.categories && brands?.data && (
          <AdminProductsTable
            setEditProductData={(value) => setEditProductData(value)}
            setDeleteProductData={(value) => setDeleteProductData(value)}
            selectCategoryData={categories.categories}
            selectBrandData={brands.data}
            type="product"
            tableData={productsData}
            disabled={disabled}
          />
        )}
        {products?.dataCount > 9 && (
          <Pagination
            count={Math.ceil((products?.dataCount || 0) / 9)}
            page={page}
            onChange={gotoPage}
          />
        )}
      </Container>
      {open && productsData && categories?.categories && brands?.data && (
        <AdminProductsModal
          selectCategoryData={categories.categories}
          selectBrandData={brands.data}
          type="add"
          onClose={handleClose}
          open={open}
          onSubmit={(value) => addData(value)}
        />
      )}
    </>
  );
}
