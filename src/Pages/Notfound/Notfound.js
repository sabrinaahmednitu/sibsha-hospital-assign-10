import React from "react";
import { NavLink } from "react-router-dom";
import error from "./../../images/doctors/404.jpg";
import './Notfound.css';
const Notfound = () => {
  return (
    <div
      style={{
        height: "91vh",
        background: `url(${error})`,
        backgroundAttachment: "fixed",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center"
      }}
      className="d-flex justify-content-center align-items-center error-img"  
    >
      <div className="text-center my-5">
        <h1 style={{ fontSize: "100px", color: "white" }}>404</h1>
        <h4 className="text-white">Sorry! PAGE NOT FOUND</h4>
        <p className="text-white">
          Sorry! the page you're looking for doesn't exist.
          you can return to
          home and look for another.
        </p>
        <NavLink to="/home">
          <button className="btn ">Return Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Notfound;
