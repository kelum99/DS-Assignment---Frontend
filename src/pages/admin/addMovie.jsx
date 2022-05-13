import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Layout,
  Table,
  Space,
  Modal,
  message,
} from "antd";
import "./stylesAdmin.css";
import useRequest from "../../services/RequestContext";
function Add() {
  const [form] = Form.useForm();
  const { request } = useRequest();
  const [movies, setMovies] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleUpdate = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async (values) => {
    try {
      const res = await request.post("movie", values);
      if (res.status === 201) {
        message.success("Movie successfully added!");
        console.log("move", res);
        onReset();
        getMovies();
      } else {
        message.error("failed!");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const getMovies = async () => {
    try {
      const res = await request.get("movie");
      if (res.status === 200) {
        console.log("movies", res);
        setMovies(res.data);
      } else {
        message.error("failed!");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const columns = [
    {
      title: "Movie Name",
      dataIndex: "title",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "des",
    },
    {
      title: "Ticket Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Show Time",
      dataIndex: "showTime",
      key: "time",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={showModal}>Update</Button>
          <Button>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <Layout>
      <h1>
        <center>Add Your Movie</center>
      </h1>
      <br />
      <Form
        form={form}
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
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <Form.Item
          label="Movie Name"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ticket Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Show Time"
          name="showTime"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <div>
        <Table dataSource={movies} columns={columns} />
      </div>

      <Modal
        title="Update"
        visible={isModalVisible}
        onUpdate={handleUpdate}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item
            label="Movie Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
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
                message: "Please input your username!",
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
                message: "Please input your username!",
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
                message: "Please input your username!",
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
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
}

export default Add;
