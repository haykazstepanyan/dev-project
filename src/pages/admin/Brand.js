import { useState } from "react";
import { Container } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import AdminMainTable from "../../components/adminMainTable/AdminMainTable";
import Button from "../../components/button/Button";
import AdminModal from "../../components/adminModal/AdminModal";
import { brands } from "../../DUMMY_DATA";

function createData(id, name, createdAt, updatedAt) {
  return { id, name, createdAt, updatedAt };
}

const rows = [];

brands.forEach((elem, index) => {
  rows.push(
    createData(index, elem, "2022-03-16 13:12:00", "2022-03-16 13:12:00"),
  );
});

export default function Brand() {
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
        <AdminMainTable type="brand" tableData={rows} />
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
