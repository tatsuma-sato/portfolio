import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../assets/styles/notFound";

const NotFound = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="content">
          <h1 className="title">404</h1>

          <h6 className="sub-title">
            <span>Oops!</span> Page not found
          </h6>

          <p className="text">The page you're looking for doesn't exist.</p>

          <Link to="/" className="link">
            Go home
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default NotFound;
