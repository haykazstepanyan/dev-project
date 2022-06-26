import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { Container } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import AdminMainTable from "../../components/adminMainTable/AdminMainTable";
import { addBrands, getBrands } from "../../redux/brand/actions";
import Button from "../../components/button/Button";
import AdminModal from "../../components/adminModal/AdminModal";
import Loader from "../../components/loader";

function createData(id, name, createdAt, updatedAt) {
  return { id, name, createdAt, updatedAt };
}

export default function Brand() {
  const brandsData = useSelector((state) => state.brands);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [brandsRows, setBrandsRows] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  useEffect(() => {
    if (!brandsData?.loading) {
      setLoading(false);
    }

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
        {loading ? (
          <Loader />
        ) : (
          <AdminMainTable type="brand" tableData={brandsRows} />
        )}
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
