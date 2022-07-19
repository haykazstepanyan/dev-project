import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import AdminMainTable from "../../components/adminMainTable/AdminMainTable";
import Button from "../../components/button/Button";
import AdminModal from "../../components/adminModal/AdminModal";
import useFetch from "../../hooks/useFetch";
import useLazyFetch from "../../hooks/useLazyFetch";
import { showSnackbar } from "../../redux/app/appSlice";
import useDebounce from "../../hooks/useDebounce";
import Input from "../../components/input";
import { adminGlobalStyles } from "./styles";

function Brand() {
  const [open, setOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const [search, setSearch] = useState("");
  const [startToSearch, setStartToSearch] = useState(false);
  const debouncedSearch = useDebounce(search, 500);

  const classes = adminGlobalStyles();
  const dispatch = useDispatch();

  const { data: brandsData, error: brandsError } = useFetch("/brands");
  const {
    data: addBrandData,
    error: addBrandError,
    lazyRefetch: addBrand,
  } = useLazyFetch();

  const { data: filteredBrandData, lazyRefetch: filteredBrandRefetch } =
    useLazyFetch();

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
    if (filteredBrandData?.data) {
      setBrands(filteredBrandData?.data);
    }
  }, [filteredBrandData]);

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

  useEffect(() => {
    if (startToSearch) {
      filteredBrandRefetch(`/brands?keyword=${debouncedSearch}`);
    }
  }, [debouncedSearch, filteredBrandRefetch, startToSearch]);

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

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (!startToSearch) {
      setStartToSearch(true);
    }
  };
  const setEditBrandData = (brandData) => {
    const { id } = brandData;
    const newState = brands.map((elem) => (elem.id === id ? brandData : elem));
    setBrands(newState);
  };
  const setDeleteBrandData = (brandData) => {
    if (brandData?.data) {
      const { id } = brandData.data;
      const newState = brands.filter((elem) => elem.id !== id);
      setBrands(newState);
    }
  };

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: 20, marginBottom: 40 }}>
        <div className={classes.toolbar}>
          <Button
            letter="capitalize"
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
          onClose={handleClose}
          open={open}
          onSubmit={(value) => addData(value)}
        />
      ) : null}
    </>
  );
}

export default Brand;
