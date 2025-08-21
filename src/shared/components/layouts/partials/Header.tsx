import React from "react";
import { Layout, theme } from "antd";
import ThemeToggle from "shared/components/ui/ThemeToogle";


const { Header } = Layout;

const HeaderBar: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "flex-end", // ⬅️ posisikan ke kanan
        alignItems: "center",
        padding: "0 16px",
        background: colorBgContainer,
      }}
    >
      <ThemeToggle/>
    </Header>
  );
};

export default HeaderBar;
