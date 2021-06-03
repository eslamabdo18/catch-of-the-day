import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {

  id =0;
  state = {
    fishes:{},
    orders:{}
  };
  addFish = fish => {
    console.log("fish added !!")
    // 1. take a copy from the state
    const fishes={...this.state.fishes}
    // 2. add the object
    fishes[`fish${Date.now()}`] = fish;
    // 3. update state
    this.setState({fishes});
  }
  loadFishes = () =>{
    this.setState({fishes:sampleFishes});
  }
  addToCart = (key) => {
    const orders = {...this.state.orders};
    orders[key] = orders[key]+1 || 1;
    this.setState({orders});
  }
  render(){
    return(
      <div className='catch-of-the-day'>
        <div className="menu">
          <Header tagline = 'Fresh sea food' />
          <ul className ="fishes">
            {Object.keys(this.state.fishes).map(key =>
              <Fish
                addToCart = {this.addToCart}
                key={key}
                index={key}
                details={this.state.fishes[key]}
            />)}
          </ul>
        </div>
        <Order/>

        <Inventory addFish={this.addFish} loadFishes={this.loadFishes}/>
      </div>
    )
  }
}

export default App;
