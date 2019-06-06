// an individual die that takes props and displays the correct face of the die based on props.
import React, {Component} from 'react';

class Die extends Component{
  render(){
    return(
      // need to render an individuaal die
      <i className = {`fas fa-dice-${this.props.face}`}></i>

    );
  }
}

export default Die;
