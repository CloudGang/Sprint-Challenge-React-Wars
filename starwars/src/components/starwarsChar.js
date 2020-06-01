// Write your Character component here
import React from 'react';
import './sWars.css';

const starwarsChar = (props) => (

  <li className="cast">

    <h3>

      <span>{props.name}</span>
      <span>{props.gender}</span>
      <span>{props.height}</span>
      <span>{props.eye_color}</span>
      <span>{props.birth_year}</span>

    </h3>

  </li>
  
);

export default starwarsChar;