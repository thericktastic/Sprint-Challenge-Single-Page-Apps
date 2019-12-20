import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
     <input type="text" onChange={e => props.setFilterTerm(e.target.value)}></input>
    </section>
  );
}
