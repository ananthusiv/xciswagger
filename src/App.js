// App.js
import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Home from "./Components/Home";
import ProductPage from "./Components/ProductPage";
import DetailingPage from "./Components/DetailingPage";
import Footer from "./Components/Footer";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <NavigationBar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Home />

      <ProductPage />
      <DetailingPage />
      <Footer />
    </div>
  );
};

export default App;
