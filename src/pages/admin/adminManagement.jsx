import React from "react";
import { Form, Input, Checkbox, Table, Button, message } from "antd";
import "./admin.css";



const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  }
];

const AdminManagement = () => {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const success = () => {
    message.success("Item Details Uploaded Successfully !");
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const dataSource = [
    {
      
      name: "Mike",
      age: 32,
      address: "10 Downing Street"
    },
    {
    
      name: "John",
      age: 42,
      address: "10 Downing Street"
    }
  ];

  return (
    <div className = "MainContainer-Item">
      <div className="form-item">
        <Form
          name="basic"
          labelCol={{
            span: 8
          }}
          wrapperCol={{
            span: 16
          }}
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!"
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16
            }}
          ></Form.Item>

          
     <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
        <Button type="primary" htmlType="submit" onClick={success}>
          ADD
        </Button>
      </Form.Item>

        </Form>
      </div>

      <div >
        <Table columns={columns} 
        data={dataSource} 
        className="table" 
        />
      </div>
    </div>
  );
};

export default AdminManagement;
