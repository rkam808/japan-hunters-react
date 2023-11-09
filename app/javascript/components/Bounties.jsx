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
          src={bounty.photo_url}
          className="card-img-top"
          alt={`${bounty.description} image`}
        />
        <div className="card-body">
          <h5 className="card-title">{bounty.description}</h5>
          <p>Offer: {bounty.price} JPY</p>
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
          <h1 className="display-4">Bounty Board</h1>
          <p className="lead text-muted">
            Bounties that users have posted. If you're a Hunter, browse the open bounties and see if there are any you can fulfill!
            If you're a Collector, why not post a Bounty and get in touch with a Hunter?
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            {/* <Link to="/bounties/new" className="btn btn-warning custom-button">
              Post a Bounty
            </Link> */}
            <a href="/bounties/new">Post a Bounty</a>
          </div>
          <div className="row">
            {bounties.length > 0 ? allBounties : noBounty}
          </div>
        </main>
      </div>
    </>
  );
};

export default Bounties;