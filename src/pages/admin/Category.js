import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";
import { Container } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import AdminModal from "../../components/adminModal/AdminModal";
import AdminMainTable from "../../components/adminMainTable/AdminMainTable";
import Button from "../../components/button/Button";
import { addCategories, getCategories } from "../../redux/category/actions";

function createData(id, name, createdAt, updatedAt) {
  return { id, name, createdAt, updatedAt };
}

export default function Category() {
  const categoriesData = useSelector((state) => state.categories);
  const [open, setOpen] = useState(false);
  const [categoriesRows, setCategoriesRows] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
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
        {categoriesData && (
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
