import React from 'react';
import AddNewFish from './AddNewFish';


class Inventory extends React.Component {
  render() {
    return(
      <div className = "Inventory">
        <h2> Inventory </h2>
        <AddNewFish addFish={this.props.addFish}/>
        <button onClick={this.props.loadFishes}>Load Fish</button>
      </div>
    )
  }
}

export default Inventory;
