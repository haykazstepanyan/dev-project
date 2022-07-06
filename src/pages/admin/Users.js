import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { Container } from "@mui/system";
import AdminUserTable from "../../components/adminUserTable/AdminUserTable";
import { getUsers } from "../../redux/users/actions";
import Loader from "../../components/loader";

function createData(id, firstName, lastName, email, role) {
  return { id, firstName, lastName, email, role };
}

export default function Users() {
  const usersData = useSelector((state) => state.users);
  const [loading, setLoading] = useState(true);
  const [usersRows, setUsersRows] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (!usersData?.loading) {
      setLoading(false);
    }

    const rows = [];
    if (!usersData.loading) {
      usersData.users.forEach((elem) => {
        const { id, firstName, lastName, email, role } = elem;
        if (elem.role !== "MAIN_ADMIN") {
          rows.push(createData(id, firstName, lastName, email, role));
        }
      });
    }
    setUsersRows(rows);
  }, [usersData]);

  return (
    <Container maxWidth="lg" style={{ marginTop: 20, marginBottom: 40 }}>
      {loading ? (
        <Loader />
      ) : (
        <AdminUserTable type="user" tableData={usersRows} />
      )}
    </Container>
  );
}
