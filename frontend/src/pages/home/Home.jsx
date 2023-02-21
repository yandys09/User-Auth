import React from "react";
import "./Home.css";
import { Outlet, Link, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <section className="home-container">
      <div className="content-container">
        <header className="content-header">
          <div className="logo">CodeBrew</div>
          {location.pathname === "/" ? (
            <p>
              Don't have an account?
              <Link className="link" to="/sign-up">
                Sign Up
              </Link>
            </p>
          ) : (
            <p>
              Already nave an account?
              <Link className="link" to="/">
                Sign In
              </Link>
            </p>
          )}
        </header>
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
      <div className="image-container"></div>
    </section>
  );
};
export default Home;
