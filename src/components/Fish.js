import React from 'react';
import {formatPrice} from "../helpers"

class Fish extends React.Component {

  addToCart = () =>{
    console.log("clicked")
    this.props.addToCart(this.props.details);
  }
  render() {
    const {name,price,image,status,desc} = this.props.details;
    return(
      <li className="menu-fish">
        <img src={image}/>
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p> {desc}</p>
        <button onClick = {this.addToCart}>Add to cart</button>
      </li>
    )
  }
}

export default Fish;
