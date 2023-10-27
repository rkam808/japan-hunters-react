import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Bounties = () => {
  const navigate = useNavigate();
  const [bounties, setBounties] = useState([]);
  
  useEffect(() => {
    const url = "/bounties";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setBounties(res))
      .catch(() => navigate("/"));
  }, []);
  
  const allBounties = bounties.map((bounty, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img
          src={bounty.image}
          className="card-img-top"
          alt={`${bounty.name} image`}
        />
        <div className="card-body">
          <h5 className="card-title">{bounty.name}</h5>
          <Link to={`/bounty/${bounty.id}`} className="btn custom-button">
            View Bounty
          </Link>
        </div>
      </div>
    </div>
  ));

  const noBounty = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No bounties yet. Why not <Link to="/new_bounty">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Bounties for every occasion</h1>
          <p className="lead text-muted">
            We’ve pulled together our most popular recipes, our latest
            additions, and our editor’s picks, so there’s sure to be something
            tempting for you to try.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            <Link to="/bounty" className="btn custom-button">
              Create New Bounty
            </Link>
          </div>
          <div className="row">
            {bounties.length > 0 ? allBounties : noBounty}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};

export default Bounties;