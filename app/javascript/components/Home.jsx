import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Welcome to Japan Hunters!</h1>
        <p className="lead">
            Have someone in Japan hunt down that rare item for you.
        </p>
        <hr className="my-4" />
        <Link
          to="/bounties"
          className="btn btn-warning btn-lg"
          role="button"
        >
          Open Bounties
        </Link>
      </div>
    </div>
  </div>
);