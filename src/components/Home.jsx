import React, { useState } from "react";
import {
  Card,
  Col,
  Row,
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  Button,
} from "antd";
import "./Styles.css";
import Nav from "./navbar";
import useUser from "../services/UserContext";

function Home() {
  const { user } = useUser();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  function onChange(value) {
    console.log("changed", value);
  }

  function handleChange(value) {
    console.log(value);
  }

  const { Option } = Select;

  return (
    <>
      <Nav />

      <div className="site-card-wrapper">
        <div>
          <Row gutter={20}>
            <Col span={6}>
              <Card
                style={{ width: 250 }}
                cover={
                  <img
                    alt="example"
                    src="https://yt3.ggpht.com/ytc/AKedOLSkNBClOIZNjJayMdTxRhUh6LYEXjjjCv0tMJ3-mA=s900-c-k-c0x00ffffff-no-rj"
                  />
                }
              >
                KGF Chapter 2<br />
                Kannada Film<br />
                Now Showing <br />
                10.30am<br />
                Action<br />
                Rs.450<br />
                <button onClick={showModal}>
                  <center>Add to cart</center>
                </button>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{ width: 250 }}
                cover={
                  <img
                    alt="example"
                    src="https://yt3.ggpht.com/ytc/AKedOLSkNBClOIZNjJayMdTxRhUh6LYEXjjjCv0tMJ3-mA=s900-c-k-c0x00ffffff-no-rj"
                  />
                }
              >
                Master<br />
                Thelingu Film<br />
                Now Showing <br />
                1.30pm<br />
                Action<br />
                Rs.450<br />
                <button onClick={showModal}>
                  <center>Add to cart</center>
                </button>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{ width: 250 }}
                cover={
                  <img
                    alt="example"
                    src="https://yt3.ggpht.com/ytc/AKedOLSkNBClOIZNjJayMdTxRhUh6LYEXjjjCv0tMJ3-mA=s900-c-k-c0x00ffffff-no-rj"
                  />
                }
              >
                Doctor strange<br />
                English Film<br />
                Now Showing <br />
                10.30pm<br />
                Action<br />
                Rs.450<br />
                <button onClick={showModal}>
                  <center>Add to cart</center>
                </button>
              </Card>
            </Col>
          </Row>
        </div>
        <br/><br/><br/>
        

        
       </div>
       <br/>
       
     

       <center>
<Button id="btn" >Admin Manage</Button>


<Button id="btn" >Customer Manage</Button>
<Button id="btn" >Movie Manage</Button></center>
    



      <div>
        <Modal
          title="Book Your Ticket"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div>
            {user ? (
              <Form
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 14,
                }}
                layout="horizontal"
                initialValues={{
                  size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
              >
                <Form.Item label="Email">
                  <Input />
                </Form.Item>

                <Form.Item label="Ticket Qty">
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={3}
                    onChange={onChange}
                  />
                </Form.Item>

                <Form.Item label="Time">
                  <Select
                    labelInValue
                    //defaultValue={{ value: "lucy" }}
                    style={{ width: 120 }}
                    onChange={handleChange}
                  >
                    <Option value="10.30am">10.30am</Option>
                    <Option value="1.30pm">1.30pm</Option>
                    <Option value="10.30pm">10.30pm</Option>
                  </Select>
                </Form.Item>
              </Form>
            ) : (
              <h3>
                To book a ticket please register!
                <br />
                <Button>Register</Button>
              </h3>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
}


  
 
export default Home;
