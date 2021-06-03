import React from 'react';
import {formatPrice} from "../helpers"

class Fish extends React.Component {

  addToCart = () =>{
    console.log("clicked")
    this.props.addToCart(this.props.index);
  }


  render() {
    const {name,price,image,status,desc} = this.props.details;
    var isAvailable = false;
    if(status==="available"){
      isAvailable = true;
    }
    return(
      <li className="menu-fish">
        <img src={image}/>
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p> {desc}</p>
        <button disabled={!isAvailable} onClick = {this.addToCart} > {isAvailable ? "Add to cart" : "Sold Out!" } </button>
      </li>
    )
  }
}

export default Fish;
