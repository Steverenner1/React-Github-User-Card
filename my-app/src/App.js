import React from 'react';
import axios from 'axios';
import './App.css';
import Usercard from './Components/Usercard'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    data: [],
    followers: []
  };
}
  
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/Steverenner1`)
        .then(res => this.setState(res))
  }
  
  
  render() {
    return (
      <div className="cards">
      <Usercard data={this.state.data} />
      </div>
    );
  }
}

export default App;
