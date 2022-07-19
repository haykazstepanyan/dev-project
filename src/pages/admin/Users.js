import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { Container } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import AdminUserTable from "../../components/adminUserTable/AdminUserTable";
import useDebounce from "../../hooks/useDebounce";
import Input from "../../components/input";
import { adminGlobalStyles } from "./styles";
import useLazyFetch from "../../hooks/useLazyFetch";
import useFetch from "../../hooks/useFetch";
import { showSnackbar } from "../../redux/app/appSlice";

export default function Users() {
  const [usersRows, setUsersRows] = useState([]);
  const [search, setSearch] = useState("");
  const [startToSearch, setStartToSearch] = useState(false);
  const debouncedSearch = useDebounce(search, 500);

  const { data: usersData, error: usersError } = useFetch("/users");

  const classes = adminGlobalStyles();
  const dispatch = useDispatch();

  const { data: filteredUserData, lazyRefetch: filteredUserRefetch } =
    useLazyFetch();

  useEffect(() => {
    if (usersData) {
      setUsersRows(usersData.data);
    }
  }, [usersData]);

  useEffect(() => {
    if (usersError) {
      dispatch(
        showSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [usersError, dispatch]);

  useEffect(() => {
    if (filteredUserData?.data) {
      setUsersRows(filteredUserData?.data);
    }
  }, [filteredUserData?.data]);

  useEffect(() => {
    if (startToSearch) {
      filteredUserRefetch(`/users?keyword=${debouncedSearch}`);
    }
  }, [debouncedSearch, filteredUserRefetch, startToSearch]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (!startToSearch) {
      setStartToSearch(true);
    }
  };

  const setEditUserData = (userData) => {
    console.log(userData);
    console.log(usersRows);
    const { id } = userData;
    const newState = usersRows.map((elem) =>
      elem.id === id ? userData : elem,
    );
    setUsersRows(newState);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: 20, marginBottom: 40 }}>
      <div className={clsx(classes.toolbar, classes.userPanel)}>
        <div className={classes.searchBox}>
          <Input
            type="text"
            placeholder="Search by First Name, Last Name, Email..."
            size="large"
            borders="square"
            state="noFocus"
            value={search}
            onChange={handleSearch}
          />
          <SearchIcon />
        </div>
      </div>
      {!!usersRows.length && (
        <AdminUserTable
          type="user"
          tableData={usersRows}
          setEditUserData={(value) => setEditUserData(value)}
        />
      )}
    </Container>
  );
}
