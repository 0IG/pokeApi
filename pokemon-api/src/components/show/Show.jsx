import React, { useState } from "react";
import Details from "../details/Details";
import "./Show.scss";
function Show({ poki, index }) {
  const [selected, setSelected] = useState();
  const [show, setShow] = useState(false);
  const github =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  const handlePokeImage = (index) => {
    return `${github}${index}.png`;
  };

  const handleClick = () => {
    console.log("clicky");
    setSelected(index);
    setShow(!show);
    console.log(`Selected`, selected);
  };

  console.log("poki: ", poki);

  return (
    <div>
      <div className="show">
        <h3 className="show__title">{poki.name}</h3>
        <div className="show__img">
          {
            <img
              src={handlePokeImage(index)}
              alt={poki.name}
              className="index__img"
            />
          }
        </div>
        <button className="show__btn" onClick={handleClick}>
          More
        </button>
      </div>
      <div className={show ? "display" : "hide"}>
        <Details poki={poki} index={index} />
      </div>
    </div>
  );
}

export default Show;
