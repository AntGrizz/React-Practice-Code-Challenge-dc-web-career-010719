import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = 'http://localhost:3000/sushis';

class App extends Component {
  constructor() {
    super();
    this.state = {
      budget: 100,
      allSushi: [],
      currentSushi: [],
      eatenSushi: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushis => this.setState({ allSushi: sushis }));
  }

  updateCurrSushi = () => {
    let sushi = [...this.state.allSushi];
    this.setState({
      currentSushi: sushi.splice(0, 4),
      allSushi: sushi
    });
  };

  afterEatSushi = sushiObj => {
    this.setState({
      budget: this.state.budget - sushiObj.price,
      eatenSushi: [...this.state.eatenSushi, sushiObj]
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          afterEatSushi={this.afterEatSushi}
          eatenSushi={this.state.eatenSushi}
          updateCurrSushi={this.updateCurrSushi}
          sushis={this.state.currentSushi}
          budget={this.state.budget}
        />
        <Table eatenSushi={this.state.eatenSushi} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;
