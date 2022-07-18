import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useFetch from "../../hooks/useFetch";
import { showLoader, hideLoader } from "../../redux/app/appSlice";

const paymentOptions = {
  body: JSON.stringify({
    currency: localStorage.getItem("currency"),
    rate: JSON.parse(localStorage.getItem("rates")).currencyRates[
      localStorage.getItem("currency")
    ],
  }),
  headers: {
    "Content-Type": "application/json",
  },
};

function Payment({ stripePromise }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [clientSecretKey, setClientSecretKey] = useState("");
  const { data, loading } = useFetch("/payment", paymentOptions, "POST");

  useEffect(() => {
    if (loading) {
      dispatch(
        showLoader({
          key: "payment/getClientSecret",
        }),
      );
    }
  }, [dispatch, loading]);

  useEffect(() => {
    if (data) {
      setClientSecretKey(data.clientSecret);
      dispatch(
        hideLoader({
          key: "payment/getClientSecret",
        }),
      );
    }
  }, [dispatch, data, navigate]);

  return (
    clientSecretKey &&
    stripePromise && (
      <div className="asd">
        <h1>Payment</h1>
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: clientSecretKey }}
        >
          <CheckoutForm />
        </Elements>
      </div>
    )
  );
}

Payment.propTypes = {
  stripePromise: PropTypes.shape({
    then: PropTypes.func.isRequired,
    catch: PropTypes.func.isRequired,
  }),
  // paymentData: PropTypes.objectOf({
  //   amount: PropTypes.number,
  //   currency: PropTypes.string,
  // }),
};

export default Payment;
