import React from "react";
import "./Styles.css";
import { Button } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const Nav = () => {
  return (
    <div className="navBarContainer">
      <div>
        <Button>Home</Button>
      </div>
      <div>
        <Button type="primary" icon={<ShoppingCartOutlined />}>
          Cart
        </Button>
      </div>
      <div>
        <Button type="primary" icon={<LogoutOutlined />}>
          Log Out
        </Button>
      </div>
      <div>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Nav;
