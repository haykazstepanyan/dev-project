import { useState } from "react";
import { Container } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../components/button/Button";
import AdminProductsTable from "../../components/adminProductsTable/AdminProductsTable";
import AdminProductsModal from "../../components/adminProductsModal/AdminProductsModal";
import { products, categories, brands } from "../../DUMMY_DATA";

function createData(
  id,
  name,
  price,
  discount,
  description,
  brand,
  category,
  categoryId,
  brandId,
) {
  return {
    id,
    name,
    price,
    discount,
    description,
    brand,
    category,
    categoryId,
    brandId,
  };
}

const rows = [];

products.forEach((elem, index) => {
  rows.push(
    createData(
      index,
      elem.name,
      elem.price,
      elem.discount,
      elem.description,
      elem.brand,
      elem.category,
      elem.categoryId,
      elem.brandId,
    ),
  );
});

export default function Product() {
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
        <AdminProductsTable type="brand" tableData={rows} />
      </Container>
      {open ? (
        <AdminProductsModal
          selectCategoryData={categories}
          selectBrandData={brands}
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
