import "./Checkout.css";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Routes, Route } from "react-router-dom";
import Completion from "./payment/Completion";
import Payment from "./payment/Payment";
import useFetch from "../hooks/useFetch";
import { showLoader, hideLoader } from "../redux/app/appSlice";

function Checkout() {
  const [stripePromise, setStripePromise] = useState(null);
  const dispatch = useDispatch();
  const { data, loading } = useFetch("/payment/config");

  useEffect(() => {
    if (loading) {
      dispatch(
        showLoader({
          key: "payment/getPublicKey",
        }),
      );
    }
  }, [dispatch, loading]);

  useEffect(() => {
    if (data) {
      setStripePromise(loadStripe(data.publishableKey));
      dispatch(
        hideLoader({
          key: "payment/getPublicKey",
        }),
      );
    }
  }, [dispatch, data]);

  return (
    <div className="stripe_container">
      <main>
        {stripePromise && (
          <Routes>
            <Route
              path="/"
              element={<Payment stripePromise={stripePromise} />}
            />
            <Route
              path="/success"
              element={<Completion stripePromise={stripePromise} />}
            />
          </Routes>
        )}
      </main>
    </div>
  );
}

export default Checkout;
