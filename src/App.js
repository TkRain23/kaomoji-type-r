import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import Sidebar from './components/Sidebar'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { category:"positive" }
  }

  setCategory(category) {
    this.setState({ category })
  }

  render() {
    return (
      <div className="App">
        <Sidebar setCategory={(category) => this.setCategory(category)}/>
        <Main cat={this.state.category} />
      </div>
    );
  }
}

export default App;
