import React from "react";
import "./Character.css";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router";

function Character() {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (error) return <div>Oops, Something went wrong :-(</div>; // Displaying the error
  if (loading) return <div>...Spinner</div>; // Displaying the loading spinner

  return (
    <div className="Character">
      <img src={data.character.image} className="Character-img" />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((e) => {
            return (
              <div>
                {e.name} - <b>{e.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Character;
