import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class MainCustomWrap extends Component {
  render() {
    return (
      <div className={this.props.customClass}>
        <div className="main">
            {this.props.children}
        </div>
        </div>
    );
  }
}

export default MainCustomWrap;