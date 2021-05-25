import React from 'react';


class AddNewFish extends React.Component {
  iname = React.createRef();
  iprice = React.createRef();
  istatus = React.createRef();
  idesc = React.createRef();
  iimage = React.createRef();

  createNewFish = event =>{
    event.preventDefault();
    const fish = {
        name:this.iname.current.value,
        price:parseFloat(this.iprice.current.value),
        status:this.istatus.current.value,
        desc:this.idesc.current.value,
        image:this.iimage.current.value
    };
    this.props.addFish(fish);

    event.currentTarget.reset();
  }
  render() {
    return(
      <form className="fish-edit" onSubmit={this.createNewFish}>
        <input ref ={this.iname} name="name" type= "text" placeholder="Name" />
        <input  ref ={this.iprice} name="price" type= "text" placeholder="Price"/>
        <select ref={this.istatus}>
          <option value = "true"> Fresh!</option>
          <option value = "false"> sold out!</option>
        </select>
        <textarea ref ={this.idesc} name="desc" placeholder="desc"></textarea>
        <input ref ={this.iimage} name="image" type= "text" placeholder = "Image"/>
        <button type="submit">+ Add</button>
      </form>
    )
  }
}

export default AddNewFish;
