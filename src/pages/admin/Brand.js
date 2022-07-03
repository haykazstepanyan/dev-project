import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import AdminMainTable from "../../components/adminMainTable/AdminMainTable";
// import { addBrands } from "../../redux/brand/actions";
import Button from "../../components/button/Button";
import AdminModal from "../../components/adminModal/AdminModal";
import useFetch from "../../hooks/useFetch";
import useLazyFetch from "../../hooks/useLazyFetch";
import { setSnackbar } from "../../redux/app/appSlice";

function Brand() {
  const [open, setOpen] = useState(false);
  const [brands, setBrands] = useState([]);

  const dispatch = useDispatch();

  const { data: brandsData, error: brandsError } = useFetch("/brands");
  const {
    data: addBrandData,
    error: addBrandError,
    loading: addBrandLoading,
    lazyRefetch: addBrand,
  } = useLazyFetch();

  useEffect(() => {
    if (addBrandData?.data) {
      setBrands((prev) => [...prev, addBrandData.data]);
    }
  }, [addBrandData]);

  useEffect(() => {
    if (brandsData) {
      setBrands(brandsData.data);
    }
  }, [brandsData]);

  useEffect(() => {
    if (addBrandError) {
      console.log("error", addBrandError);
    }
  }, [addBrandError]);
  useEffect(() => {
    if (addBrandLoading) {
      console.log("loading", addBrandLoading);
    }
  }, [addBrandLoading]);

  useEffect(() => {
    if (brandsError) {
      dispatch(
        setSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [dispatch, brandsError]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const addData = (value) => {
    const brandData = { name: value };

    addBrand(
      "/brands/brand",
      {
        body: JSON.stringify(brandData),
        headers: {
          "Content-Type": "application/json",
        },
      },
      "POST",
    );

    handleClose();
  };

  function setEditBrandData(brandData) {
    const { id } = brandData;
    const newState = brands.map((elem) => (elem.id === id ? brandData : elem));
    setBrands(newState);
  }
  function setDeleteBrandData(brandData) {
    console.log(brandData);
    const { id } = brandData;
    const newState = brands.filter((elem) => elem.id !== id);
    setBrands(newState);
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
        {brands && (
          <AdminMainTable
            setEditBrandData={(value) => setEditBrandData(value)}
            setDeleteBrandData={(value) => setDeleteBrandData(value)}
            type="brand"
            tableData={brands}
          />
        )}
      </Container>
      {open ? (
        <AdminModal
          type="add"
          onClose={() => handleClose()}
          open={open}
          onSubmit={(value) => addData(value)}
        />
      ) : null}
    </>
  );
}

export default Brand;
