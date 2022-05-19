import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Result, Button, Card, Radio, Form, Input } from "antd";
import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { total } = useParams();
  const [success, setSuccess] = useState();
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

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
        amount: total,
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
              <span style={{ fontSize: 16, fontWeight: "bold" }}>
                Total: {total} LKR
              </span>
            </Card>
          </div>

          <div style={{ marginTop: 20 }}>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Pay Via Card</Radio>
              <Radio value={2}>Add to Mobile Bill</Radio>
            </Radio.Group>
          </div>
          {value === 1 ? (
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
          ) : (
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
              <Form
                layout="vertical"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
                <Form.Item
                  className="label"
                  label="Mobile Number"
                  name="mobile"
                  rules={[
                    {
                      required: true,
                      message: "Please input your mobile number.",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  className="label"
                  label="OTP"
                  name="otp"
                  rules={[
                    {
                      required: true,
                      message: "Please input OTP.",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item>
                  <Button htmlType="submit" type="primary">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          )}
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
