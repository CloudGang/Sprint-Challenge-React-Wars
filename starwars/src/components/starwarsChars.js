import React from 'react';
import Character from './starwarsChar';
import './sWars.css';


const starwarsChars = (props) => (

  <ul className="starwarsChars">

    {props.chars.map(char => (

      <Character key={char.name} {...char} />

    ))}

  </ul>
  
);

export default starwarsChars;