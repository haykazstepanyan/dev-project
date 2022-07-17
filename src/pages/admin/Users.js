import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { Container } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import AdminUserTable from "../../components/adminUserTable/AdminUserTable";
import { getUsers } from "../../redux/users/actions";
import Loader from "../../components/loader";
import useDebounce from "../../hooks/useDebounce";
import Input from "../../components/input";
import { adminGlobalStyles } from "./styles";
import useLazyFetch from "../../hooks/useLazyFetch";

function createData(id, firstName, lastName, email, role, num) {
  return { id, firstName, lastName, email, role, num };
}

export default function Users() {
  const usersData = useSelector((state) => state.users);
  const [loading, setLoading] = useState(true);
  const [usersRows, setUsersRows] = useState([]);
  const [search, setSearch] = useState("");
  const [startToSearch, setStartToSearch] = useState(false);
  const debouncedSearch = useDebounce(search, 500);

  const classes = adminGlobalStyles();
  const dispatch = useDispatch();

  const { data: filteredUserData, lazyRefetch: filteredUserRefetch } =
    useLazyFetch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (!usersData?.loading) {
      setLoading(false);
    }

    const rows = [];
    if (!usersData.loading) {
      let num = 0;
      usersData.users.forEach((elem) => {
        const { id, firstName, lastName, email, role } = elem;
        if (elem.role !== "MAIN_ADMIN") {
          num += 1;
          rows.push(createData(id, firstName, lastName, email, role, num));
        }
      });
    }
    setUsersRows(rows);
  }, [usersData]);

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

  return (
    <Container maxWidth="lg" style={{ marginTop: 20, marginBottom: 40 }}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={classes.toolbar}>
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
          <AdminUserTable
            type="user"
            tableData={
              filteredUserData?.data ? filteredUserData?.data : usersRows
            }
          />
        </>
      )}
    </Container>
  );
}
