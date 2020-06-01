import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/starwarsChars';
import Loader from 'react-loader-spinner'

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

    console.log(this.state.forceData)

    const { results, previous, next } = this.state.forceData;

    return (

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

    );

  }
  
}

export default App;