// src/context/ThemeContext.tsx
import React, { createContext,useState } from "react";
import { ConfigProvider, theme } from "antd";

type ThemeMode = "light" | "dark" | "contrast";

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleTheme = (newMode: ThemeMode) => {
    setMode(newMode);
    document.documentElement.classList.remove("light", "dark", "contrast");
    document.documentElement.classList.add(newMode);
  };

  const antTheme =
    mode === "dark"
      ? { algorithm: theme.darkAlgorithm }
      : { algorithm: theme.defaultAlgorithm };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ConfigProvider theme={antTheme}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
