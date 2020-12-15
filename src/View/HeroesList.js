import React from "react";
import PropTypes from "prop-types";
import HeroItem from "./HeroItem";

const style = {
  ul: {
    border: "2px solid white",
  },
};

function HeroesList({ heroes = [] }) {
  return (
    <div className="HeroesList">
      <ul style={style.ul}>
        <h2>Heroes Table</h2>
        {heroes.map((hero, index) => (
          <HeroItem hero={hero} key={hero.id} index={index} />
        ))}
      </ul>
    </div>
  );
}

HeroesList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HeroesList;
