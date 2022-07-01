import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import AdminMainTable from "../../components/adminMainTable/AdminMainTable";
import { addBrands } from "../../redux/brand/actions";
import Button from "../../components/button/Button";
import AdminModal from "../../components/adminModal/AdminModal";
import useFetch from "../../hooks/useFetch";
import { showNotification } from "../../redux/app/appSlice";

function createData(id, name, createdAt, updatedAt) {
  return { id, name, createdAt, updatedAt };
}

export default function Brand() {
  const [open, setOpen] = useState(false);
  const [brandsRows, setBrandsRows] = useState([]);

  const dispatch = useDispatch();

  const { data: brandsData, error: brandsError } = useFetch("/brands");

  useEffect(() => {
    if (brandsError) {
      dispatch(
        showNotification({
          notificationType: "error",
          notificationMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [dispatch, brandsError]);

  useEffect(() => {
    const rows = [];
    if (!brandsData.loading) {
      brandsData.brands.forEach((elem) => {
        const { id, name, createdAt, updatedAt } = elem;
        rows.push(createData(id, name, createdAt, updatedAt));
      });
    }
    setBrandsRows(rows);
  }, [brandsData]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const addData = (value) => {
    const brandData = { name: value };
    dispatch(addBrands(brandData));
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
        <AdminMainTable type="brand" tableData={brandsRows} />
      </Container>
      {open ? (
        <AdminModal
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
