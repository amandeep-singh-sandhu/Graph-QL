import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import Character from "./Character";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

function Search() {
  const [name, setName] = useState("");

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={() => getLocations()}>
        Search
      </button>
      {loading && <div>Spinner...</div>}
      {error && <div>Something Went Wrong!!</div>}
      {data && (
        <ol>
          {data.characters.results.map((c, index) => {
            return <li key={index}>{c.location.name}</li>;
          })}
        </ol>
      )}
    </div>
  );
}

export default Search;
