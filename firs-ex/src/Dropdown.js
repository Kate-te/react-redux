import React, { Component } from 'react';
//import './Dropdown.css';

class Dropdown extends Component {
  constructor(props){
      super(props);
      this.state = {isOpened: false};
  }

toggleState(){
    this.setState({isOpened: !this.state.isOpened});
}

  render() {
    console.log(this.state.isOpened);
    let drop;
    if (this.state.isOpened){
        drop = <div> it is your hidden div</div>
    }
    return (
      <div onClick={this.toggleState.bind(this)}>
     menu??
      {drop}
      </div>
    );
  }
}

export default Dropdown;
