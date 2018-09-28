import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const CustomLayout = props => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          {props.isAuthenticated ? (
            <Menu.item key="2">Logout</Menu.item>
          ) : (
            <Menu.item key="2">
              <Link to="/login">Login</Link>
            </Menu.item>
          )}
          <Menu.Item key="1">
            <Link to="/units">Movies</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/units/">List</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by FranQyy ©2018</Footer>
    </Layout>
  );
};

export default CustomLayout;
