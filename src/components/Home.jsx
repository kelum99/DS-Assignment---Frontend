import React, { useState } from "react";
import { Card, Col, Row, Modal, Form, Input, InputNumber, Select } from "antd";
import "./Styles.css";
import Nav from "./navbar";

function Home() {
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
                 <Row gutter={16}>
                   <Col span={8}>
                     <Card
                       style={{ width: 250 }}
                       cover={
                         <img
                           alt="example"
                           src="https://cdn.cbeditz.com/cbeditz/thumbnail/kgf-chapter-2-movie-poster-background-download-11610710099utufdj4uyl.webp"
                         />
                       }
                     >
                       KGF Chapter 2<br />
                       Now Showing <br />
                       <button onClick={showModal}>
                         <center>Add to cart</center>
                       </button>
                     </Card>
                   </Col>
                 </Row>
               </div>
             </div>
             <div>
               <Modal
                 title="Book Your Ticket"
                 visible={isModalVisible}
                 onOk={handleOk}
                 onCancel={handleCancel}
               >
                 <div>
                  
      
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
                         <Option value="aam">10.30am</Option>
                         <Option value="pm">1.30pm</Option>
                         <Option value="am">10.30pm</Option>
                       </Select>
                     </Form.Item>
                   </Form>
                 </div>
               </Modal>
             </div>
           </>
         );
       }
      

export default Home;





