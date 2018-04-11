import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class Main extends Component {
  render() {
    return (
        <div className="main">
            {this.props.children}
        </div>
    );
  }
}

export default Main;