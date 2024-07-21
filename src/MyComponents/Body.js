import React from "react";
import { useState, useEffect } from "react";
import "./Body.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
export const Body = () => {
  let myStyle = {
    minHeight: "65vh",
    margin: "40px auto",
    padding: "20vh",
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  const [text] = useTypewriter({
    words: ["Developer", "Gamer", "Professional Procrastinator"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });
  return (
    <div className={`body-content ${isLoaded ? "active" : ""}`}>
      <div className="container my-3 d-flex align-items-center justify-content-center h-100 text">
        <div className="text-center" style={myStyle}>
          <h1>Hi guys I am Jayesh,</h1>
          <h2>
            I Am a{" "}
            <span style={{ fontWeight: "bold", color: "pink" }}>
              {text}
              <Cursor cursorStyle="_" />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};
