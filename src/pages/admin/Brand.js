import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { Container } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import AdminMainTable from "../../components/adminMainTable/AdminMainTable";
import { getBrands } from "../../redux/brand/actions";
import Button from "../../components/button/Button";
import AdminModal from "../../components/adminModal/AdminModal";
import Loader from "../../components/loader";

// import { brands } from "../../DUMMY_DATA";

function createData(id, name, createdAt, updatedAt) {
  return { id, name, createdAt, updatedAt };
}

const rows = [];

function createBrandsList({ loading, brands }) {
  if (!loading) {
    brands.forEach((elem) => {
      const { id, name, createdAt, updatedAt } = elem;
      rows.push(createData(id, name, createdAt, updatedAt));
    });
  }
}

export default function Brand() {
  const brandsData = useSelector((state) => state.brands);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  useEffect(() => {
    if (!brandsData?.loading) {
      setLoading(false);
    }
    createBrandsList(brandsData);
  }, [brandsData]);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const addData = (value) => {
    console.log(value);
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
          <AdminMainTable type="brand" tableData={rows} />
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
