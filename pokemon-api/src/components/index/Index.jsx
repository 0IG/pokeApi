import React, { useState, useEffect } from "react";
import Show from "../show/Show";
import axios from "axios";
import "./Index.scss";
const Index = () => {
  const [pokemon, setPokemon] = useState([]);
  const API = "https://pokeapi.co/api/v2/pokemon?limit=10";
  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((error) => {
        console.error("i have no data ;_; ", error);
      });
  }, []);

  return (
    <div className="index">
      <div className="index__title">Index :3</div>
      <div className="index__container">
        {pokemon.map((poki, index) => (
          <Show key={index} poki={poki} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Index;
