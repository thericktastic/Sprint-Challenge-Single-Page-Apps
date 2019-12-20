import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const CharacterListSection = styled.section`
text-align: center;
`;

const CharacterListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  // console.log(`This is the characters state `, characters);

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

  const [filterTerm, setFilterTerm] = useState("");
  const [filterResults, setFilterResults] = useState([]);
  console.log(`This is filterTerm: `, filterTerm);

  useEffect(() => {
    const results = characters.filter(item =>
      item.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
    setFilterResults(results);
    console.log(`This is results `, results);
  }, [filterTerm]);
  
  return (
    <CharacterListSection>
      <span>Enter a character's name and see what pops up! 
        <SearchForm setFilterTerm={setFilterTerm}></SearchForm>
      </span>
      <CharacterListDiv>
      {filterResults.map(character => {
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
      </CharacterListDiv>
    </CharacterListSection>
  );
}
