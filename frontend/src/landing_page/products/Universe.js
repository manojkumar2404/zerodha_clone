/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center universe-logo">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media\images\zerodhaFundhouse.png" />
          <p><span>Our asset management venture
          that is creating simple and transparent index funds to help you save for your goals.</span></p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media\images\sensibullLogo.svg" />
          <p><span>Options trading platform that lets you
          create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</span></p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media\images\tijori.svg" />
          <p><span>Investment research platform
          that offers detailed insights on stocks, sectors, supply chains, and more.</span></p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media\images\streakLogo.png" />
          <p><span>Systematic trading platform
          that allows you to create and backtest strategies without coding.</span></p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p><span>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</span></p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media\images\dittoLogo.png" />
          <p><span>Personalized advice on life and health insurance. No spam and no mis-selling.</span></p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;