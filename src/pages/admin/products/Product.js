import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { useDispatch } from "react-redux";
import { ref, deleteObject } from "firebase/storage";

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

export default function Product() {
  const [open, setOpen] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("page") || 1);
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

  function setEditProductData(value) {
    const { id } = value;
    const newState = productsData.map((elem) =>
      elem.id === id ? value : elem,
    );
    setProductsData(newState);
    productFetch();
  }
  function setDeleteProductData(value) {
    const { id, productImg } = value;
    console.log(value);
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
  }

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: 20, marginBottom: 40 }}>
        <div>
          <Button
            letter="capitalize"
            style={{ marginBottom: 20 }}
            page="admin"
            onClick={() => handleOpen()}
            disableRipple
          >
            <AddIcon />
          </Button>
        </div>
        {productsData && categories?.data && brands?.data && (
          <AdminProductsTable
            setEditProductData={(value) => setEditProductData(value)}
            setDeleteProductData={(value) => setDeleteProductData(value)}
            selectCategoryData={categories.data}
            selectBrandData={brands.data}
            type="product"
            tableData={productsData}
          />
        )}
        {products?.dataCount ? (
          <Pagination
            count={Math.ceil((products?.dataCount || 0) / 9)}
            page={page}
            onChange={gotoPage}
          />
        ) : null}
      </Container>
      {open && productsData && categories?.data && brands?.data ? (
        <AdminProductsModal
          selectCategoryData={categories.data}
          selectBrandData={brands.data}
          type="add"
          onClose={() => handleClose()}
          open={open}
          onSubmit={(value) => addData(value)}
        />
      ) : (
        ""
      )}
    </>
  );
}
