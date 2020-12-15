import React from "react";
import PropTypes from "prop-types";

function SearchField({ setQuery }) {
  function handleSubmit(event) {
    let query = {};
    if (event.target[0].value) query.key = event.target[0].value.toLowerCase();
    if (event.target[1].value) query.sortParam = event.target[1].value;

    setQuery(query);
    event.preventDefault();

    event.target[0].value = "";
  }

  return (
    <form className="SearchHeroes" onSubmit={handleSubmit}>
      <input type="text" name="search" placeholder="hero name" />

      <select name="type">
        <option defaultValue value="name">
          Name
        </option>
        <option value="fullName"> FullName </option>
        <option value="powerStats"> PowerStats </option>
        <option value="race"> Race </option>
        <option value="gender"> Gender </option>
        <option value="height"> Height </option>
        <option value="weight"> Weight </option>
        <option value="placeOfBirth"> placeOfBirth </option>
        <option value="alignment"> Alignment </option>
      </select>
      <input type="submit" value="seacrh" />
    </form>
  );
}

SearchField.PropType = {
  setQuery: PropTypes.func.isRequired,
};

export default SearchField;
