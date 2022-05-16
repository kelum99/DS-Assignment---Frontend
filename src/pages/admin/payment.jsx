import React,{useState} from "react";
import {Link} from "react-router-dom";
import "./admin.css";
import {
    Form,
    Input,
    InputNumber,
    Button,
    DatePicker,
    message,Space,Row
  } from "antd";



function Payment() {
    const layout = {
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 14
      }
    };
    const [size] = useState('large')
  
    const onSuccess = () => {
      message.success("Card Add To Wallet Successfully !");
    };
  
  
 
  
    return (
  
        <div className="main-container-payment">
          <div className="form">
            <h1>Payment Details</h1>
          
            <Form
              name="payment-form"
              
              layout="vertical"
            >
              <Form.Item
                name={["nickName"]}
                label="Nickname for Card"
                rules={[{ required: true }]}
              >
                <Input autocomplete="off" />
              </Form.Item>
  
              <Form.Item
                name={["name"]}
                label="Cardholder's Name"
                rules={[{ required: true }]}
              >
                <Input autocomplete="off" />
              </Form.Item>
  
              <Form.Item
                name={["cardNumber"]}
                label="Card Number"
                rules={[{ required: true }]}
              >
                <Input maxLength={16} />
              </Form.Item>
  
              <Form.Item
                name={["expireDate"]}
                label="Expire Month/Year"
                rules={[{ required: true }]}
              >
                <DatePicker picker="month" />
              </Form.Item>
  
              <Form.Item
                name={["cvv"]}
                label="CVV"
                rules={[
                  {
                    type: "number",
                    required: true
                  }
                ]}
              >
                <InputNumber maxLength={3} />
              </Form.Item>
  
              {/* <Form.Item name="save" valuePropName="checked">
                <Checkbox >Save this card to wallet</Checkbox>
              </Form.Item> */}
  
              <Form.Item
                shouldUpdate
                wrapperCol={{ ...layout.wrapperCol, offset: 10 }}
              >
              <Row>
              <Space size={size}>
                <Button type="primary" htmlType="submit" onClick={onSuccess}>
                  PAY
                </Button>
                <Link to="/updateWallet">
                </Link>
                </Space>
                </Row>
              </Form.Item>
            </Form>
  
          </div>
        </div>
    );
  }

export default Payment;