import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import Pagination from "../../../components/pagination/Pagination";
import Button from "../../../components/button/Button";
import AdminProductsTable from "../../../components/adminProductsTable/AdminProductsTable";
import AdminProductsModal from "../../../components/adminProductsModal/AdminProductsModal";
import { getBrands } from "../../../redux/brand/actions";
import { getCategories } from "../../../redux/category/actions";
import {
  addProducts,
  getProductsCount,
  getProductsPagination,
} from "../../../redux/product/actions";
// import validations from "./validations";

export default function Product() {
  // const { productsValidation } = validations;
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const products = useSelector((state) => state.products.paginationProducts);
  const productsLength = useSelector((state) => state.products.productsLength);
  const brands = useSelector((state) => state.brands);
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsCount());
    dispatch(getBrands());
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductsPagination({ page }));
  }, [dispatch, page]);

  const gotoPage = (_, pageNum) => {
    console.log("pageNum - ", pageNum);
    setPage(pageNum);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const addData = (value) => {
    // console.log("addData", value);
    dispatch(addProducts(value));

    // value.productImg = "https://fontawesome.com/v5/icons/trash?s=solid";
    // console.log(value);
    // productsValidation.isValid(value).then((err, valid) => {
    //   console.log(err);
    //   console.log(valid);
    // });
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
        {products && categories.categories && brands.brands && (
          <AdminProductsTable
            selectCategoryData={categories.categories}
            selectBrandData={brands.brands}
            type="product"
            tableData={products}
          />
        )}
        <Pagination
          count={Math.ceil(productsLength / 9)}
          page={page}
          onChange={gotoPage}
        />
      </Container>
      {open && categories.categories && brands.brands ? (
        <AdminProductsModal
          selectCategoryData={categories.categories}
          selectBrandData={brands.brands}
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
