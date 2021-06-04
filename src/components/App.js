import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {

  state = {
    fishes: {},
    orders: {},
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem(
      this.props.match.params.storeId
    );
    console.log("he" + localStorageRef);
    if (localStorageRef) {
      this.setState({ orders: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }
  componentDidUpdate() {
    localStorage.setItem(
      `${this.props.match.params.storeId}`,
      JSON.stringify(this.state.orders)
    );
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    console.log("fish added !!");
    // 1. take a copy from the state
    const fishes = { ...this.state.fishes };
    // 2. add the object
    fishes[`fish${Date.now()}`] = fish;
    // 3. update state
    this.setState({ fishes });
  };
  loadFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };

    fishes[key] = updatedFish;

    this.setState({ fishes });
  };
  deleteFish = (key) => {
    const fishes = { ...this.state.fishes };

    fishes[key] = null;

    this.setState({ fishes });
  };
  addToCart = (key) => {
    const orders = { ...this.state.orders };
    orders[key] = orders[key] + 1 || 1;
    this.setState({ orders });
  };
  deleteFromOrder = (key) => {
    const orders = { ...this.state.orders };
    delete orders[key];
    this.setState({ orders });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh sea food" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                addToCart={this.addToCart}
                key={key}
                index={key}
                details={this.state.fishes[key]}
              />
            ))}
          </ul>
        </div>
        <Order {...this.state} deleteFromOrder={this.deleteFromOrder} />

        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadFishes={this.loadFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
