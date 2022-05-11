import React from "react";
import { Table } from "antd";
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

const CustomerManagement = () => {
    

return (
  <div>
   <Table columns={columns} data={dataSource} className="customer-table" />
  </div>
);
};

export default CustomerManagement;

