import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

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
  render(){
    return(
      <div className='catch-of-the-day'>
        <div className="menu">
          <Header tagline = 'Fresh sea food' />
        </div>
        <Order/>
        <Inventory addFish={this.addFish} loadFishes={this.loadFishes}/>
      </div>
    )
  }
}

export default App;
