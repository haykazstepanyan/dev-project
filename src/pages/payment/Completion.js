import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchData } from "../../helpers/helpers";

function Completion({ stripePromise }) {
  const [messageBody, setMessageBody] = useState("");

  useEffect(() => {
    if (!stripePromise) return;

    stripePromise.then(async (stripe) => {
      const url = new URL(window.location);
      const clientSecret = url.searchParams.get("payment_intent_client_secret");
      const { error, paymentIntent } = await stripe.retrievePaymentIntent(
        clientSecret,
      );

      console.log(paymentIntent);

      if (!error) {
        const {
          data: { data },
        } = await fetchData("cart/getCartItems");

        const productIds = data.map(({ id }) => id);

        await fetchData(
          "orders",
          {
            productIds,
            amount: paymentIntent.amount,
            currency: paymentIntent.currency.toUpperCase(),
          },
          undefined,
          "POST",
        );

        await fetchData("cart", undefined, undefined, "DELETE");
      }

      setMessageBody(
        error ? (
          `${error.message}`
        ) : (
          <>
            <Typography component="h2" variant="h5" marginBottom={4}>
              Payment {paymentIntent.status}!
            </Typography>
            <Typography component="p" variant="p" marginBottom={4}>
              You have been charged{" "}
              <b>
                {paymentIntent.amount / 100}
                {paymentIntent.currency.toUpperCase()}
              </b>
              .
            </Typography>
            <Typography component="p" variant="p" marginBottom={4}>
              We will inform you as soon as your order is near at your place.
            </Typography>
            <Link to="/shop"> Go back to shop!</Link>
          </>
        ),
      );
    });
  }, [stripePromise]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {messageBody}
    </div>
  );
}

Completion.propTypes = {
  stripePromise: PropTypes.shape({
    then: PropTypes.func.isRequired,
    catch: PropTypes.func.isRequired,
  }),
};

export default Completion;
