// src/components/layout/ThemeToggle.tsx
import React from "react";
import { Switch, Tooltip } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useTheme } from "../../context/useTheme";

const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <Tooltip title={`Switch to ${mode === "dark" ? "Light" : "Dark"} Mode`}>
      <Switch
        checked={mode === "dark"}
        onChange={(checked) => toggleTheme(checked ? "dark" : "light")}
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
      />
    </Tooltip>
  );
};

export default ThemeToggle;
