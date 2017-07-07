import React, { Component } from 'react';
import './App.css';


class Header extends Component {
// validation react props (type)
//     static propTypes ={
//       items: PropTypes.array.isRequired
// type: PropTypes.oneOf(['news', 'photos'])
// user: PropTypes.shape({
//   name: PropTypes.string,
//   age: PropTypes.number
// }),
// users: PropTypes.arrayOf(
//   PropTypes.shape({
//     name: PropTypes.string,
//     age: PropTypes.number
//   })
// )
//     };

  render() {
    return (
      <div>
        {this.props.items.map((item, index) => 
          <a href={item.link} className='link' key ={index}>{item.label} </a>
        )}
      </div>
    );
  }
}

export default Header;
