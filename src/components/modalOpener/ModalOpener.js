import { useState } from "react";
import PropTypes from "prop-types";
import ProductsInOrderModal from "../modals/ProductsInOrderModal";
import Button from "../button/Button";

function ModalOpener({ orderId }) {
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

export default ModalOpener;
