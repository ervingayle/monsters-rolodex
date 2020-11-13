import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box-component';

class App extends Component {
  constructor() {
    super();

    /* this.state = {
      string: 'Hello ErvinTheGreat'
    }; */

    this.state = {
      monsters: [],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
    <div className="App">
      <h1>ErvinTheGreat's Monster Rolodex</h1>
      {/* <input 
      type="search" 
      placeholder="search monsters" 
      onChange={e => this.setState({ searchField: e.target.value } )} /> */}

      <SearchBox
      placeholder='search monsters'
      handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </div>
        <button onClick={() => this.setState({ string: 'Hello Mr. ErvinTheGreat' })}>Change Text</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default App;
