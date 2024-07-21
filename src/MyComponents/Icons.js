import React from "react";
import "./Icons.css";
import instagram from "../instagram.png";
import linkedin from "../linkedin.png";
import program from "../program.png";
import github from "../Github.png";

export const Icons = () => {
  let myStyle = {
    width: "15%",
  };
  return (
    <div className="icons-container my-3 mx-3" style={myStyle}>
      <a
        href="https://instagram.com/jayeshranjan4?igshid=OTJhZDVkZWE="
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={instagram}
          alt="Instagram Icon"
          className="pixelated-icon white-icon up-animation icon-spacing"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/jayeshranjan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedin}
          alt="LinkedIn Icon"
          className="pixelated-icon white-icon up-animation icon-spacing"
        />
      </a>
      <a
        href="https://leetcode.com/JayeshRanjan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={program}
          alt="leetcode Icon"
          className="pixelated-icon white-icon up-animation icon-spacing"
        />
      </a>
      <a
        href="https://github.com/Jayesh-coder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={github}
          alt="github icon"
          className="pixelated-icon up-animation icon-spacing"
        />
      </a>
    </div>
  );
};
