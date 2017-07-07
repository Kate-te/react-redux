// import React, { Component } from 'react';
// import Header from './Header';
// import Dropdown from './Dropdown';
// // import Registration from './Registration';
// import './App.css';

// const menu = [
//   {
//     link: '/articles',
//     label: 'Articles'
//   },
//   {
//     link: '/contacts',
//     label: 'Contacts'
//   },
//   {
//     link: '/posts',
//     label: 'Posts'
//   }
// ];


// class App extends Component {
// handleSubmit() {
//   console.log('submited', this.testInput.value);
// }

//   render() {
//     return (
//       <div className="App">
//         <Header items ={menu} />
//         <input type='text' placeholder="test" ref={(input) => this.testInput = input}/>
//         <button onClick={this.handleSubmit.bind(this)}>Submit</button>
//         <Dropdown/>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  addTrack(){
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = "";
  }

  render(){
    console.log(this.props.testStore);
    const tracks = this.props.testStore;
    return(
      <div>
        <input type="text" ref={(input) =>{ this.trackInput = input}} />
        <button onClick={this.addTrack.bind(this)}>Add track</button>
        <ul>
          {tracks.map((track, index) =>
          <li key={index}>{track}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  //as usual mapStateToProps()
  state => ({
    testStore: state
  }),
  // as usual 
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({ type: 'ADD_TRACK', payload: trackName});
    }
  })
)(App);