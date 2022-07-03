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

  const dispatch = useDispatch();

  const { data: brandsData, error: brandsError } = useFetch("/brands");
  const {
    data: addBrandData,
    error: addBrandError,
    loading: addBrandLoading,
    lazyRefetch: addBrand,
  } = useLazyFetch();

  console.log(addBrandData);

  useEffect(() => {
    if (addBrandData) {
      console.log("data", addBrandData);
    }
  }, [addBrandData]);
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

  // console.log("brandsData", brandsData?.data);

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
        {brandsData?.data && (
          <AdminMainTable type="brand" tableData={brandsData?.data} />
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
