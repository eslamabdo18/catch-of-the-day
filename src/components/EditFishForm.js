import React from "react";

class EditFishForm extends React.Component {

  handleSubmit = (event) =>{
    console.log(event.target.value);

    const updatedFish = {
      ...this.props.fish,
      [event.target.name]:event.target.value
    }
    this.props.updateFish(this.props.index,updatedFish);
  }

  render() {
    const { name, price, status, desc, image } = this.props.fish;
    return (
      <div className="fish-edit">
        <input
          ref={this.iname}
          name="name"
          type="text"
          onChange={this.handleSubmit}
          placeholder="Name"
          value={name}
        />
        <input
          ref={this.iprice}
          name="price"
          type="text"
          onChange={this.handleSubmit}
          placeholder="Price"
          value={price}
        />
        <select  onChange={this.handleSubmit} name ='status'ref={this.istatus} value={status}>
          <option value="available"> Fresh!</option>
          <option value="unavailable"> sold out!</option>
        </select>
        <textarea
          ref={this.idesc}
          name="desc"
          onChange={this.handleSubmit}
          placeholder="desc"
          value={desc}
        ></textarea>
        <input
          ref={this.iimage}
          name="image"
          type="text"
          onChange={this.handleSubmit}
          placeholder="Image"
          value={image}
        />
        <button onClick={()=> this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    );
  }
}

export default EditFishForm;
