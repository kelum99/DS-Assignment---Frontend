import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Result, Button, Card } from "antd";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [success, setSuccess] = useState();

  const handlePay = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      const { id } = paymentMethod;
      const res = await axios.post("http://localhost:8000/api/stripe/payment", {
        amount: 1000,
        id,
        email: "kelumayuwardhana@gmail.com",
      });
      if (res.data.success) {
        console.log("successfull payment");
        setSuccess(true);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <div style={{ margin: 25 }}>
          <div>
            <Card title="Checkout" style={{ width: 600 }}>
              <p>Transction Id:</p>
              <p>Movies:</p>
              <p>Total:</p>
            </Card>
          </div>

          <form onSubmit={handlePay}>
            <Card
              className="checkoutForm"
              title="Make Payment"
              headStyle={{
                fontSize: 20,
                fontWeight: "bold",
                border: "none",
                color: "#fff",
              }}
            >
              <CardElement className="card" />
              <button className="payBtn">Pay</button>
            </Card>
          </form>
        </div>
      ) : (
        <div>
          <Result
            status="success"
            title="Successfully Purchased Your Tickets"
            subTitle="Order number: 2017182818828182881 "
            extra={[
              <Button type="primary" onClick={() => navigate("/home")}>
                Go Home Page
              </Button>,
            ]}
          />
        </div>
      )}
    </>
  );
};

export default Payment;
