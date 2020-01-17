import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import PlayerCard from "./components/PlayerCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount(){
    axios.get("http://localhost:5000/api/players")
    .then(response => {
      console.log(response)
      this.setState({
        players: response.data
      })
    })
    .catch(error => console.log("thrown error", error))
  }

  render() {
    return(  
    <div className="App">
      <PlayerCard players={this.state} />

    </div>
    );
  }
}

export default App;
