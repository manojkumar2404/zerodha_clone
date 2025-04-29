/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="d-flex justify-content-between align-items-center" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#" className="track-link">Track tickets</a>
      </div>

      <div className="row" id="supportContent">
        <div className="col-md-6" id="leftContent">
          <h1 className="supportSubHeading">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <div className="position-relative">
            <input type="text" className="search-input" placeholder="Eg: how do I activate F&O, why is my order getting rejected ..." />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>

          <div className="d-flex flex-wrap gap-4 quick-links">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>

        <div className="col-md-6 " id="rightContent">
          <h1 className="fs-4 mb-4 mt-5">Featured</h1>
          <ol className="ps-3">
            <li className="mb-3">
              <a href="#">Latest Intraday leverages and Square-off timings</a>
            </li>
            <li className="mb-3">
              <a href="#">Rights Entitlements listing in April 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
