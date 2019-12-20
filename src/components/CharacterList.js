import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const CharacterListSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(`Axios.get.then: `, response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(`You failed! Here's why: `, error);
      });
  }, []);

  return (
    <CharacterListSection>
      {characters.map(character => {
        console.log(`Character is: `, character);
        return (
          <CharacterCard
            props={character}
            key={character.id}
            name={character.name}
            status={character.status}
          />
        );
      })}
    </CharacterListSection>
  );
}
