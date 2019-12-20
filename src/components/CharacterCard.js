import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 200px;
  background: #AFD3E9;
  margin: 10px 0;
  padding: 10px;
  text-align: center;
`;

export default function CharacterCard(props) {
  return (
    <CardDiv>
      <h2>{props.name}</h2>
      <p>Status: {props.status}</p>
    </CardDiv>
  );
}
