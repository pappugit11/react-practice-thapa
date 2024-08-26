import React from "react";
import seriesData from "../api/seriesData.json";
import Cards from "./Cards";

const NetflixSeries = () => {
  return (
    <>
      <section className="netflix_sec">
        <div className="container">
          <div className="row gy-4 ">
            {seriesData.map((currData) => (
              /* <li key={currData.id} className="col-lg-4">
                <div className="card_wrap ">
                  <figure>
                    <img
                      src={currData.img_url}
                      width="100%"
                      height="40%"
                      alt={currData.name}
                    />
                  </figure>
                  <h2>Name: {currData.name}</h2>
                  <h3>Rating: {currData.rating}</h3>
                  <p>Summary: {currData.description}</p>
                  <p>Genre: {currData.genre}</p>
                  <p>Cast: {currData.cast}</p>
                  <a href={currData.watch_url} target="_blank">
                    <button className="btn btn-success">Watch</button>
                  </a>
                </div>
              </li> */
              <Cards key={currData.id} data={currData} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NetflixSeries;
