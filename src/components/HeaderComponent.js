'use strict';

import React from 'react';
// import Link from 'react-router';

require('styles//Header.sass');

class HeaderComponent extends React.Component {

  render() {
    return (
      <div className="header-component">
        <h1>Header Component</h1>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
