import React, { useEffect } from "react";
import SearchField from "./View/SearchField";
import HeroesList from "./View/HeroesList";
import EmptyOrShow from "./components/EmptyOrShow";
import SortCases from "./Consts";
// import Core from "./Core"

function App() {
  const [heroes, setHeroes] = React.useState([]);
  const [vueHeroes, setVueHeroes] = React.useState(heroes);
  const [loading, setLoading] = React.useState(false);
  // const [currentPage, setCurrentPage] = React.useState(1);
  // const [heroesPerPage, setHeroesPerPage] = React.useState(10);
  const [query, setQuery] = React.useState({ key: "" });

  useEffect(() => {
    setLoading(true);
    fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
      .then((response) => response.json())
      .then((data) => {
        setHeroes(data);
        setVueHeroes(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let arr = heroes;
    function SortHeroes(arr, param) {
      arr = arr.sort((a, b) => (SortCases[param](a, b) ? 1 : -1));
      return arr;
    };

    console.log("query", query);
    if (query.key !== "") {
      let name, fullName;

      arr = arr.filter((hero) => {
        name = hero.name.toLowerCase();
        fullName = hero.biography.fullName.toLowerCase();

        return name.includes(query.key) || fullName.includes(query.key);
      });
    }

    if (query.sortParam !== "name") arr = SortHeroes(arr, query.sortParam);
    setVueHeroes(arr);
  }, [query]); // search and sort Heroes

  return (
    <div className="App">
      <h1>Sortable React</h1>

      {/* <Core heroes={heroes} setVueHeroes={setVueHeroes} /> */}
      <SearchField setQuery={setQuery} />

      <EmptyOrShow loading={loading}>
        {vueHeroes.length ? (
          <HeroesList heroes={vueHeroes} />
        ) : (
          <p>List of Heroes is empty</p>
        )}
      </EmptyOrShow>
    </div>
  );
}

export default App;
