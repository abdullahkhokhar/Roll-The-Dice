// an individual die that takes props and displays the correct face of the die based on props.
import React, {Component} from 'react';
import './Die.css';

class Die extends Component{
  render(){
    return(
      // need to render an individuaal die
      <i className = {`Die fas fa-dice-${this.props.face} ${this.props.rolling ? "shaking" : ''}`}></i>
    );
  }
}

export default Die;
