import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  /*
    this a way to bind
  */
  // constructor(){
  //   super();
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  myInput = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.handleSubmit}>
          <h2> please enter an store </h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit"> Visit Store </button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
