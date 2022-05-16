import React from "react";
import "./Styles.css";
import { Button } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import useUser from "../services/UserContext";
import useRequest from "../services/RequestContext";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const { user, setUser } = useUser();
  const { UpdateToken } = useRequest();
  const navigate = useNavigate();

  const logout = async () => {
    await UpdateToken(undefined);
    setUser({});
    navigate("/");
  };
  return (
    <div className="navBarContainer">
      <div>
        <Button>Home</Button>
      </div>
      <div>
        {user && (
          <Button type="primary" icon={<ShoppingCartOutlined />}>
            Cart
          </Button>
        )}
      </div>
      <div>
        {user ? (
          <Button type="primary" icon={<LogoutOutlined />} onClick={logout}>
            Log Out
          </Button>
        ) : (
          <Button
            type="primary"
            icon={<LoginOutlined />}
            onClick={() => navigate("/")}
          >
            Login
          </Button>
        )}
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
