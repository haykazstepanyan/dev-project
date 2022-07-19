import { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { Container } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import AdminModal from "../../components/adminModal/AdminModal";
import AdminMainTable from "../../components/adminMainTable/AdminMainTable";
import Button from "../../components/button/Button";
import useFetch from "../../hooks/useFetch";
import { showSnackbar } from "../../redux/app/appSlice";
import useLazyFetch from "../../hooks/useLazyFetch";
import useDebounce from "../../hooks/useDebounce";
import { adminGlobalStyles } from "./styles";
import Input from "../../components/input";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [startToSearch, setStartToSearch] = useState(false);
  const debouncedSearch = useDebounce(search, 500);

  const classes = adminGlobalStyles();
  const dispatch = useDispatch();

  const { data: categoriesData, error: categoriesError } =
    useFetch("/categories");
  const {
    data: addCategoryData,
    error: addCategoryError,
    lazyRefetch: addCategory,
  } = useLazyFetch();
  const { data: filteredCategoryData, lazyRefetch: filteredCategoryRefetch } =
    useLazyFetch();

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
    if (filteredCategoryData?.categories) {
      setCategories(filteredCategoryData?.categories);
    }
  }, [filteredCategoryData?.categories]);

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

  useEffect(() => {
    if (startToSearch) {
      filteredCategoryRefetch(`/categories?keyword=${debouncedSearch}`);
    }
  }, [debouncedSearch, filteredCategoryRefetch, startToSearch]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (!startToSearch) {
      setStartToSearch(true);
    }
  };

  const addData = (value) => {
    const categoryData = { name: value };

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
        <div className={classes.toolbar}>
          <Button
            letter="capitalize"
            style={{ marginBottom: 20 }}
            page="admin"
            onClick={handleOpen}
            disableRipple
          >
            <AddIcon />
          </Button>
          <div className={classes.searchBox}>
            <Input
              type="text"
              placeholder="Search by name..."
              size="large"
              borders="square"
              state="noFocus"
              value={search}
              onChange={handleSearch}
            />
            <SearchIcon />
          </div>
        </div>
        {!!categories.length && (
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
          onClose={handleClose}
          open={open}
          onSubmit={(value) => addData(value)}
        />
      ) : (
        ""
      )}
    </>
  );
}
