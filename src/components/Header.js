import React from 'react';


// function to render.
const Header = ({tagline}) =>(
    <header className='top'>
      <h1> Catch
        <span className='ofThe'>
          <span className='of'> of </span>
          <span className='the'> the </span>
        </span>
           day
      </h1>
      <h3 className= 'tagline'>
        <span> {tagline} </span>
      </h3>
    </header>
)


// class Header extends React.Component{
//   render() {
//     return(Header(this.props));
//   }
// }

export default  Header;
