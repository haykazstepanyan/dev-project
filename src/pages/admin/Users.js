import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { Container } from "@mui/system";
import AdminUserTable from "../../components/adminUserTable/AdminUserTable";
import { getUsers } from "../../redux/users/actions";
import Loader from "../../components/loader";

function createData(id, firstName, lastName, email, role, num) {
  return { id, firstName, lastName, email, role, num };
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
