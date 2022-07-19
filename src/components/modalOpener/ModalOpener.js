import InventoryIcon from "@mui/icons-material/Inventory";
import { useState } from "react";
import PropTypes from "prop-types";
import ProductsInOrderModal from "../modals/ProductsInOrderModal";
import { colors } from "../../constants/constants";

export default function ModalOpener({ orderId }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <InventoryIcon
        onClick={() => {
          setOpenModal((prevOpenModal) => !prevOpenModal);
        }}
        sx={{
          ":hover": {
            color: colors.green,
            cursor: "pointer",
          },
        }}
      />
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
