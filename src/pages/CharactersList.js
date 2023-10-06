import React from "react";
import { Link } from "react-router-dom";
import "./CharactersList.css";
import { useCharacters } from "../hooks/useCharacters";

function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (error) return <div>Oops, Something went wrong :-(</div>; // Displaying the error
  if (loading) return <div>...Spinner</div>; // Displaying the loading spinner

  return (
    <div className="CharactersList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} />
            <h2>{character.name}</h2>
            {/* <h1>{character.id}</h1> */}
          </Link>
        );
      })}
    </div>
  );
}

export default CharactersList;
