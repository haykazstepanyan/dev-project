// import InventoryIcon from "@mui/icons-material/Inventory";
import { useState } from "react";
import PropTypes from "prop-types";
import ProductsInOrderModal from "../modals/ProductsInOrderModal";
// import { colors } from "../../constants/constants";
import Button from "../button/Button";

export default function ModalOpener({ orderId }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        disableRipple
        purpose="viewOrderProducts"
        onClick={() => {
          setOpenModal((prevOpenModal) => !prevOpenModal);
        }}
      >
        View
      </Button>
      {openModal && (
        <ProductsInOrderModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          orderId={orderId}
        />
      )}
    </>
  );
}

ModalOpener.propTypes = {
  orderId: PropTypes.number,
};
