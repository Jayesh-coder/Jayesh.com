import React, { useState, useEffect } from "react";
import "./About.css";
import uni from "../uni.png";

export const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoad,setIsLoad] = useState(false);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoad(true);
    }, 1500);
  }, []);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoaded(true);
    }, 850);
  }, []);

  return (
    <>
      <h2 className="container my-3 d-flex align-items-center justify-content-center h-100 text">
        About Me
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-sm-12 mb-3 mb-sm-0">
                <div className={`about-content ${isLoaded ? "active" : ""}`}>
                  <div className="card">
                    <img src={uni} className="card-img-top" alt="🎓" />
                    <div className="card-body">
                      <h5 className="card-title">KiiT University🎓</h5>
                      <p className="card-text" style={{ fontSize: "1rem" }}>
                        <i>I proudly graduated with a Bachelor of Technology in Computer Science and Systems Engineering in 2024</i>🙊
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4" >
            <div className="sidebar bg-secondary-subtle bg" >
              <div className={`about-content ${isLoad ? "active" : ""}`} style={{ padding:"1rem"}}>
              <h2>Hi,</h2>
              <i>
                <p>My name is Jayesh Ranjan</p>
                <p>I have graduated from KiiT Unviversity in 2024.</p>
              <p>I did my Internship of 5 months from HighRadius Technologies as a Software Developer.</p>
              </i>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="container">
  <div className="row">
    <div className="col-md-4 d-flex justify-content-center">
      <div className="sidebar bg-secondary-subtle bg">
        <div className={`about-content ${isLoad ? "active" : ""}`} style={{padding:'10px'}}>
          <i>
            <p>I have many hobbies I love.</p>
            <p>Such as art, music, movies...</p>
            <p>But among them, I love gaming 🕹️ and cooking 🤌 the best.</p>
          </i>
        </div>
      </div>
    </div>
  </div>
</div>

      
     
    </>
  );
};
