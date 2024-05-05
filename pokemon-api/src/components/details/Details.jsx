import React, { useState, useEffect } from "react";
import "./Details.scss";
import axios from "axios";

export default function Details({ poki, index }) {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    axios
      .get(poki.url)
      .then((response) => {
        console.log(poki.url);
        setPokemon(response.data);
      })
      .catch((error) => {
        console.error("i have no data ;_; ", error);
      });
  }, []);
  console.log("poki: ", poki);
  return (
    <div className="details">
      <h1 className="details__Title">Details :3</h1>
      <div className="details__weight">Weight: {pokemon.weight}</div>
    </div>
  );
}
