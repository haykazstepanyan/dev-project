import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import AdminMainTable from "../../components/adminMainTable/AdminMainTable";
import Button from "../../components/button/Button";
import AdminModal from "../../components/adminModal/AdminModal";
import useFetch from "../../hooks/useFetch";
import useLazyFetch from "../../hooks/useLazyFetch";
import { showSnackbar } from "../../redux/app/appSlice";

function Brand() {
  const [open, setOpen] = useState(false);
  const [brands, setBrands] = useState([]);

  const dispatch = useDispatch();

  const { data: brandsData, error: brandsError } = useFetch("/brands");
  const {
    data: addBrandData,
    error: addBrandError,
    lazyRefetch: addBrand,
  } = useLazyFetch();

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (addBrandData?.data) {
      setBrands((prev) => [...prev, addBrandData.data]);

      dispatch(
        showSnackbar({
          snackbarType: "success",
          snackbarMessage: "Brand is added successfully!",
        }),
      );
      handleClose();
    }
  }, [addBrandData, dispatch]);

  useEffect(() => {
    if (brandsData) {
      setBrands(brandsData.data);
    }
  }, [brandsData]);

  useEffect(() => {
    if (addBrandError || brandsError) {
      dispatch(
        showSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [addBrandError, brandsError, dispatch]);

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
  };

  function setEditBrandData(brandData) {
    const { id } = brandData;
    const newState = brands.map((elem) => (elem.id === id ? brandData : elem));
    setBrands(newState);
  }
  function setDeleteBrandData(brandData) {
    if (brandData?.data) {
      const { id } = brandData.data;
      const newState = brands.filter((elem) => elem.id !== id);
      setBrands(newState);
    }
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
