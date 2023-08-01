"use client";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const body = document.querySelector(".container");
    body.classList.remove("disappear");
  }, []);

  return (
    <div className="appear homeSectionContainer">
      <section className="homeSection">
        <div className="mainCardContainer">
          <div className="mainCardButton">
            <button id="myButton">EDC Tactical</button>
          </div>
        </div>
        <div className="homeBackground"></div>
        <button className="homeBtn">
          ¿Te gustaría aprender a disparar con nosotros?
        </button>
      </section>
    </div>
  );
};

export default Home;
