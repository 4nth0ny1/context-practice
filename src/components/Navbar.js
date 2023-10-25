import React, { useContext } from "react";

export default function Navbar({ DarkContext }) {
  const { dark, handleSetDark } = useContext(DarkContext);

  const darkStyles = {
    test: {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    },
    button: {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      border: dark ? "2px solid white" : "2px solid black",
      borderRadius: "10px",
      cursor: "pointer",
    },
    nav: {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      borderBottom: dark ? "2px solid white" : "2px solid black",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  };

  return (
    <div style={darkStyles.nav}>
      <h2>logo</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          gap: "20px",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <li>home</li>
          <li>about</li>
        </ul>
        <button style={darkStyles.button} onClick={handleSetDark}>
          {dark ? "light" : "dark"}
        </button>
      </div>
    </div>
  );
}
