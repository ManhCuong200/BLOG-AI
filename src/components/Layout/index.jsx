import { useState } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header isDarkMode={theme === "dark"} toggleDarkMode={toggleTheme} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
