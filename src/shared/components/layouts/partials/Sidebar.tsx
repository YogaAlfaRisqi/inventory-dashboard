import React, { useState } from "react";
import {

  BarChartOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UserOutlined,
  SettingOutlined,
  DatabaseOutlined,
  FolderOpenOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";

const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const items: MenuProps["items"] = [
  { key: "dashboard", icon: <BarChartOutlined />, label: "Dashboard" },
  { key: "products", icon: <DatabaseOutlined />, label: "Products" },
  { key: "categories", icon: <FolderOpenOutlined />, label: "Categories" },
  { key: "suppliers", icon: <TeamOutlined />, label: "Suppliers" },
  { key: "customers", icon: <UserOutlined />, label: "Customers" },
  { key: "transactions", icon: <ShoppingCartOutlined />, label: "Transactions" },
  { key: "reports", icon: <FileTextOutlined />, label: "Reports" },
  { key: "settings", icon: <SettingOutlined />, label: "Settings" },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{ ...siderStyle, background: colorBgContainer }}
    >
      <div className="demo-logo-vertical h-12 bg-gray-200 m-2 rounded">
        <img className="p-2" src="src/assets/react.svg" alt="Logo" />
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
