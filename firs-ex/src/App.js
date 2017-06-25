import React, { Component } from 'react';
import Header from './Header';
import Registration from './Registration';
import './App.css';

const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/posts',
    label: 'Posts'
  }
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header items ={menu} />
        <Registration />
      </div>
    );
  }
}

export default App;
