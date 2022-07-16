import { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { Container } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import AdminModal from "../../components/adminModal/AdminModal";
import AdminMainTable from "../../components/adminMainTable/AdminMainTable";
import Button from "../../components/button/Button";
// import { addCategories, getCategories } from "../../redux/category/actions";
import useFetch from "../../hooks/useFetch";
import { showSnackbar } from "../../redux/app/appSlice";
import useLazyFetch from "../../hooks/useLazyFetch";

export default function Category() {
  const { data: categoriesData, error: categoriesError } =
    useFetch("/categories");
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const {
    data: addCategoryData,
    error: addCategoryError,
    lazyRefetch: addCategory,
  } = useLazyFetch();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (categoriesData) {
      setCategories(categoriesData.categories);
    }
  }, [categoriesData]);

  useEffect(() => {
    if (categoriesError) {
      dispatch(
        showSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [categoriesError, dispatch]);

  // useEffect(() => {
  //   dispatch(getCategories());
  // }, [dispatch]);

  useEffect(() => {
    if (addCategoryData?.data) {
      setCategories((prev) => [...prev, addCategoryData.data]);

      dispatch(
        showSnackbar({
          snackbarType: "success",
          snackbarMessage: "Category is added successfully!",
        }),
      );
      handleClose();
    }
  }, [addCategoryData, dispatch]);

  useEffect(() => {
    if (addCategoryError || categoriesError) {
      dispatch(
        showSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [addCategoryError, categoriesError, dispatch]);

  const addData = (value) => {
    const categoryData = { name: value };
    // dispatch(addCategories(categoryData));

    addCategory(
      "/categories/category",
      {
        body: JSON.stringify(categoryData),
        headers: {
          "Content-Type": "application/json",
        },
      },
      "POST",
    );
  };

  function setEditCategoryData(categoryData) {
    if (categoryData?.data) {
      const { id } = categoryData.data;
      const newState = categories.map((elem) =>
        elem.id === id ? categoryData.data : elem,
      );
      setCategories(newState);
    }
  }
  function setDeleteCategoryData(categoryData) {
    if (categoryData?.data) {
      const { id } = categoryData.data;
      const newState = categories.filter((elem) => elem.id !== id);
      setCategories(newState);
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
        {categories && (
          <AdminMainTable
            setEditCategoryData={(value) => setEditCategoryData(value)}
            setDeleteCategoryData={(value) => setDeleteCategoryData(value)}
            type="category"
            tableData={categories}
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
      ) : (
        ""
      )}
    </>
  );
}
