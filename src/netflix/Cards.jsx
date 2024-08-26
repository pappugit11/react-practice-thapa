import React from "react";

import styles from "./Netflix.module.css";

const Cards = (props) => {
  const { name, id, img_url, rating, description, cast, genre, watch_url } =
    props.data;

  const btnStyle = {
    background: `${rating < 8.2 ? "#CD1818" : "#005B41"}`,
    padding: "10px 30px",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
  };

  const ratingClass = rating < 8.2 ? styles.average : styles.super_hit;

  return (
    <div className="col-lg-4">
      <div className={styles.card_wrap}>
        <figure className={styles.card_img_wrap}>
          <img src={img_url} width="100%" height="100%" alt={name} />
        </figure>
        <div className={styles.card_content}>
          <h2 className={styles.card_title}>Name: {name}</h2>
          <h3 className={styles.card_rating}>
            Rating:
            <span
              // style={
              //   rating < 8.2
              //     ? { background: "red" }
              //     : { background: "green" }
              // }

              className={`${styles.rating} ${ratingClass}`}
            >
              {rating}
            </span>
          </h3>
          <p className={styles.card_summary}>Summary: {description}</p>
          <p className={styles.card_genre}>Genre: {genre}</p>
          <p>Cast: {cast}</p>
          <a href={watch_url} target="_blank">
            <button style={btnStyle}>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
