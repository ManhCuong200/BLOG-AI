import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureCard from "./components/FeatureCard";
import Editor from "./components/Editor";
import History from "./components/History";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");
  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  const getCurrentPage = () => {
    return window.location.hash.slice(1) || "";
  };

  const renderPage = () => {
    const currentPage = getCurrentPage();
    switch (currentPage) {
      case "editor":
        return <Editor />;
      case "history":
        return <History />;
      case "/":
      default:
        return (
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <HeroSection />
            <FeatureCard />
          </div>
        );
    }
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        <div className="fixed inset-0 z-[9999] pointer-events-none"></div>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <main className="container mx-auto px-4 py-12">{renderPage()}</main>
      </div>
    </div>
  );
}

export default App;
