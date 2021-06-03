import React from "react";
import AddNewFish from "./AddNewFish";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="Inventory">
        <h2> Inventory </h2>
        {Object.keys(this.props.fishes).map((key) => (
          <EditFishForm
            key={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
            index={key}
          />
        ))}
        <AddNewFish addFish={this.props.addFish} />
        <button onClick={this.props.loadFishes}>Load Fish</button>
      </div>
    );
  }
}

export default Inventory;
