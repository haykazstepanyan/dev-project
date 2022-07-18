import "./Checkout.css";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Completion from "./payment/Completion";
import Payment from "./payment/Payment";
import useFetch from "../hooks/useFetch";
import { showLoader, hideLoader } from "../redux/app/appSlice";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!location.state) {
    location.state = {};
  }

  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    if (!location.search && !location.state.dontRedirect) {
      navigate("/");
    }
  }, [navigate, location]);

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
