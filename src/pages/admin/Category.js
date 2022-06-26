import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";
import { Container } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import AdminModal from "../../components/adminModal/AdminModal";
import AdminMainTable from "../../components/adminMainTable/AdminMainTable";
// import { addCategories, getCategories } from "../../redux/brand/actions";

import Button from "../../components/button/Button";
import Loader from "../../components/loader";
import { addCategories, getCategories } from "../../redux/category/actions";

// import { categories } from "../../DUMMY_DATA";

function createData(id, name, createdAt, updatedAt) {
  return { id, name, createdAt, updatedAt };
}

// const rows = [];

// categories.forEach((elem, index) => {
//   rows.push(
//     createData(index, elem, "2022-03-16 13:12:00", "2022-03-16 13:12:00"),
//   );
// });

export default function Category() {
  const categoriesData = useSelector((state) => state.categories);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [categoriesRows, setCategoriesRows] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (!categoriesData?.loading) {
      setLoading(false);
    }

    const rows = [];
    if (!categoriesData.loading) {
      categoriesData.categories.forEach((elem) => {
        const { id, name, createdAt, updatedAt } = elem;
        rows.push(createData(id, name, createdAt, updatedAt));
      });
    }
    setCategoriesRows(rows);
  }, [categoriesData]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const addData = (value) => {
    const categoryData = { name: value };
    dispatch(addCategories(categoryData));
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
          <AdminMainTable type="category" tableData={categoriesRows} />
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
