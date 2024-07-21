import "./App.css";
import { Header } from "./MyComponents/Header";
import Loading from "./MyComponents/Loading";
import { Body } from "./MyComponents/Body";
import backgroundImage from "./background2.gif";
import React, { useState, useEffect } from "react";
import { Footer } from "./MyComponents/Footer";
import { Icons } from "./MyComponents/Icons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./MyComponents/About";
import { HaveFun} from "./MyComponents/HaveFun/HaveFun";
import { CurrentlyPlaying } from "./MyComponents/CurrentlyPlaying/CurrentlyPlaying";
import { ErrPage } from "./MyComponents/404error/ErrPage";


function App() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundColor: "#f0f0f0",
    transition: "filter 1s ease",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some heavy operation
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when data is ready
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading /> // Show the loading animation while data is loading
      ) : (
        <div style={divStyle}>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={ <Body />} />
            
            
              <Route exact path="/About" element={<About />} />
              <Route exact path="/HaveFun" element={<HaveFun />} />
              <Route exact path="/CurrentlyPlaying" element={<CurrentlyPlaying />} />
              <Route path="*" element ={<ErrPage />} />
            </Routes>
            <Icons />
            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
