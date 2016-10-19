require('normalize.css/normalize.css');
require('styles/App.css');
require('../../bower_components/gsap/src/minified/TweenMax.min.js');

import React from 'react';

// import Header from './HeaderComponent';
// import Footer from './FooterComponent';
import SvgLogo from './svg/SvgLogo';

// let yeomanImage = require('../images/yeoman.png');
let logoGrads = require('../images/svg/hr_grads.svg');

class AppComponent extends React.Component {
  constructor() {
      super();
      // this.state = {name: 'This is the state! - balls'};
  }

  // changeName(name) {
    // this.setState({name});
  // }

  render() {
    return (
      <div className="index">
        <SvgLogo animationId="0" />
        <SvgLogo animationId="1" />
        <SvgLogo animationId="2" />
        <SvgLogo animationId="3" />

        <div className="logo-grads-container">
          <img className="logo-grads" src={logoGrads} alt="gradients" />
        </div>

      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
