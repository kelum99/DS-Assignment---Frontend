import React from "react";
import { Form, Input, Button, Layout } from 'antd';
import './stylesAdmin.css';


const add = () => {
    // const onFinish = (values) => {
    //   console.log('Success:', values);
    // };
  
    // const onFinishFailed = (errorInfo) => {
    //   console.log('Failed:', errorInfo);
    // };
    
  
    return (
        
       <Layout >
           
           
           <h1><center>Add Your Movie</center></h1><br/>
      <Form
      
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 10,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >

        <Form.Item
          label="Movie Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        
        
        <Form.Item
          label="Description"
          name="text"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ticket Price"
          name="text"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Show Time"
          name="text"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category"
          name="text"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
        wrapperCol={{
            offset: 8,
            span: 16,
          }}>
         
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        
        </Form.Item>
      </Form>

      <div>
<table id="table" className="container">
    
<tr>
  <th>Movie Name</th>

  <th>Description</th>

  <th>Ticket Price</th>

  <th>Show Time</th>

  <th>Category</th>

</tr>
</table>
</div>
      </Layout>





    );
  };

  export default add;