import React from "react";
import { CardList } from "./CardList/CardList.jsx";
import { Searchbox } from "./Searchbox/Searchbox.jsx";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then((data) => data.json())
      .then((responce) => {
        this.setState({ monsters: responce });
      });
  }
  searchFun = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const newMonstersArray = this.state.monsters.filter((item) =>
      item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>TeknoTok Monsters</h1>
        <Searchbox placeholder="search For Me" handleChange={this.searchFun} />
        <CardList monstersProps={newMonstersArray} />
      </div>
    );
  }
}

export default App;
