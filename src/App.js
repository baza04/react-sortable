import React, { useEffect } from "react";
import SearchField from "./View/SearchField";
import HeroesList from "./View/HeroesList";
import EmptyOrShow from "./components/EmptyOrShow";
// import Core from "./Core"

function App() {
  const [heroes, setHeroes] = React.useState([]);
  const [vueHeroes, setVueHeroes] = React.useState(heroes);
  const [loading, setLoading] = React.useState(true);
  const [query, setQuery] = React.useState({ key: "" });

  function SortHeroes(param) {
    let arr = vueHeroes;
    switch (param) {
      case "fullName":
        arr = arr.sort((a, b) =>
          a.biography.fullName > b.biography.fullName ? 1 : -1
        );
        break;
      case "powerStats":
        arr = arr.sort((a, b) => (a.powerStats > b.powerStats ? 1 : -1));
        break;
      case "race":
        arr = arr.sort((a, b) =>
          a.appearance.race > b.appearance.race ? 1 : -1
        );
        break;
      case "gender":
        arr = arr.sort((a, b) =>
          a.appearance.gender > b.appearance.gender ? 1 : -1
        );
        break;
      case "height":
        arr = arr.sort((a, b) =>
          a.appearance.height > b.appearance.height ? 1 : -1
        );
        break;
      case "weight":
        arr = arr.sort((a, b) =>
          a.appearance.weight > b.appearance.weight ? 1 : -1
        );
        break;
      case "placeOfBirth":
        arr = arr.sort((a, b) =>
          a.biography.placeOfBirth > b.biography.placeOfBirth ? 1 : -1
        );
        break;
      case "alignement":
        arr = arr.sort((a, b) =>
          a.biography.alignement > b.biography.alignement ? 1 : -1
        );
        break;
      default:
        arr = arr.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    setVueHeroes(arr);
  }

  useEffect(() => {
    fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
      .then((response) => response.json())
      .then((data) => {
        setHeroes(data);
        setVueHeroes(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("query", query);
    if (query.key !== "") {
      let name, fullName;
      setVueHeroes(
        heroes.filter((hero) => {
          name = hero.name.toLowerCase();
          fullName = hero.biography.fullName.toLowerCase();

          return name.includes(query.key) || fullName.includes(query.key);
        })
      );
      console.log("search", heroes);
    } else {
      setVueHeroes(heroes);
    }

    if (query.sortParam !== "name") SortHeroes(query.sortParam);
  }, [query]); // search and sort Heroes

  return (
    <div className="App">
      <h1>Sortable React</h1>

      {/* <Core state={test} func={setTest} /> */}
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
