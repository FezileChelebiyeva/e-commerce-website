import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div id="not-found">
       <Helmet>
        <title>404 Not Found - Tammy demo</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <header>
        <div className="container">
          <span onClick={() => navigate("/")} className="home">
            Home
          </span>{" "}
          <span className="error">{">"} 404 Not Found</span>
        </div>
      </header>
      <div className="error-page">
        <div className="container">
          <div className="not-found">
            <h2>OOOPS! ERROR 404</h2>
            <p>Sorry, But the page you are looking for does't exist!</p>
            <button onClick={() => navigate("/")}>GO TO HOME PAGE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
