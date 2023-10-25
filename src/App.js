import React, { createContext, useContext, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";

const DarkContext = createContext();

export default function App() {
  const [dark, setDark] = useState(false);

  const darkStyles = {
    test: {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    },
  };

  const handleSetDark = () => {
    setDark(!dark);
  };

  return (
    <DarkContext.Provider value={{ dark, handleSetDark }}>
      <div className="App" style={darkStyles.test}>
        <Navbar DarkContext={DarkContext} />
        <Hero />
      </div>
    </DarkContext.Provider>
  );
}
