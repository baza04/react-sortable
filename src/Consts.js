/* import React from 'react'

const Consts = () => {
    const url = "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json"
}

// export default Consts  */

const SortCases = new Map();

SortCases["name"] = (a, b) => a.name > b.name;
SortCases["fullName"] = (a, b) => a.biography.fullName > b.biography.fullName;
SortCases["powerStats"] = (a, b) => a.powerStats > b.powerStats;
SortCases["race"] = (a, b) => a.appearance.race > b.appearance.race;
SortCases["gender"] = (a, b) => a.appearance.gender > b.appearance.gender;
SortCases["height"] = (a, b) => a.appearance.height > b.appearance.height;
SortCases["weight"] = (a, b) => a.appearance.weight > b.appearance.weight;
SortCases["placeOfBirth"] = (a, b) => a.biography.placeOfBirth > b.biography.placeOfBirth;
SortCases["alignement"] = (a, b) => a.biography.alignement > b.biography.alignement;

export default SortCases