import React, { Component } from 'react';
//import './Dropdown.css';

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  handleSubmit(event){
      event.preventDefault();
      console.log('form is submitted. Email: ', this.state.email);
  }
  
  handleEmailChange(event){
      console.log('email was changed', event.target.value);
      this.setState({email: event.target.value})
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='email' 
        placeholder='Email'
        value={this.state.email}
        onChange={this.handleEmailChange}/>
        <button>Submit</button>
      </form>
    );
  }
}

export default Registration;
