import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/starwarsChars';
import Loader from 'react-loader-spinner'
import styled from "styled-components";

class App extends Component {

  state = {

    forceData: {}

  }

  componentDidMount() {

    setTimeout(() => this.getCharacters(), 3000);

  }

  getCharacters = (url = 'https://swapi.dev/api/people/') => {

    fetch(url)

      .then(res => res.json())

      .then(data => {

        this.setState({ forceData: data });

      })
      .catch(err => {

        throw new Error(err);

      });

  };

  render() {

    const Container = styled.div `

    .App {
      text-align: center;
    }
    .Header {
      color: #443e3e;
      text-shadow: 1px 1px 5px #fff;
    }
    /* write your parent styles in here for your App.js */
    .sWarsBG {
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }
    
    .sWarsBG {
      background: url(./images/sWarsBG.gif);
      background-size: fill;
    }
    
    
    .app {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      color: #ffe81f;
      position: relative;
      padding: 1em;
    }
    
    .header {
      font-size: 3rem;
      color: white;
      text-transform: uppercase;
      word-spacing: .3em;
      margin-bottom: 1rem;
      position: relative;
      text-shadow: 2px 2px #000000;
    }
    
    .header > span {
      cursor: pointer;
      position: absolute;
      top: 0;
    }
    
    .header > span.next {
      right: -1em;
      content: url(./images/sWarsRight.png);
      
    }
    
    .header > span.prev {
      top: 0;
      content: url(./images/sWarsLeft.png);
      left: -1em;
    }
    
    .header {
      text-shadow: 0 0 4px rgb(9, 218, 255);  color: transparent;
    }
    
    
    `

    console.log(this.state.forceData)

    const { results, previous, next } = this.state.forceData;

    return (
      <Container>
        <React.Fragment>

          <div className="sWarsBG">

            <div className="app">

              <div className="header">

                {previous ? <span alt="title" title="Pagination" className="prev" onClick={() => this.getCharacters(previous)}>.</span> : null}
                
                <h1>Characters</h1>
                
                {next ? <span className="next" onClick={() => this.getCharacters(next)}>.</span> : null}
              
              </div>
              
              {results
                
                ? <CharacterList chars={results} />
                : <Loader type="Audio" color="cyan" secondaryColor="#ffffff " height={500} width={500} timeout={0}/>
              
              }
            
            </div>

          </div>

        </React.Fragment>
      </Container>
    );

  }
  
}

export default App;