import React from "react";
// import "./footer.css";

export const Footer = () => {
  let footerStyle = {
    width: "100%",
  };
  return (
    <footer
      className="bg-dark text-light py-3 opacity-50 border"
      style={footerStyle}
    >
      <p className="text-center">Copyright &copy; Jayesh.</p>
    </footer>
  );
};
