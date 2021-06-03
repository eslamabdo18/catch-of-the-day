import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.orders[key];
    if (!fish) return null;
    if (fish.status !== "available") {
      return (
        <li key={key}>
          sorry {fish ? fish.name : "fish"} is no longer available
          <button onClick={() => this.props.deleteFromOrder(key)}>
            {" "}
            &times;{" "}
          </button>
        </li>
      );
    }
    return (
      <CSSTransition
        classNames="order"
        key={key}
        timeout={{ enter: 500, exit: 500 }}
      >
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition classNames="count" key={count} timeout={{enter:500,exit:500}}>
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button onClick={() => this.props.deleteFromOrder(key)}>
              {" "}
              &times;{" "}
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  render() {
    const ordersId = Object.keys(this.props.orders);
    const total = ordersId.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.orders[key];
      const isAvailable = fish && fish.status === "available";

      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {ordersId.map((key) => this.renderOrder(key))}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong> {formatPrice(total)} </strong>
        </div>
      </div>
    );
  }
}

export default Order;
