import React from "react";
import { Table, Button} from "antd";
import useReuest from "./services/RequestContext";
import "./admin.css";

const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street"
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street"
    }
  ];
  
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
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button>Delete</Button>
    }
  ];

const CustomerManagement = () => {
  const onFinish = values => {
    console.log("Success:", values);
  };

return (
  <div>
   <Table 
    columns={columns}
    dataSource={dataSource} 
    className="customer-table" />
  </div>
);
};

export default CustomerManagement;

