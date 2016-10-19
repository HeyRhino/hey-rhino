'use strict';

import React from 'react';

require('styles//pages/Feature.sass');

class FeatureComponent extends React.Component {
  render() {
    return (
      <div className="feature-component">
        Please edit src/components//pages//FeatureComponent.js to update this component!
      </div>
    );
  }
}

FeatureComponent.displayName = 'PagesFeatureComponent';

// Uncomment properties you need
// FeatureComponent.propTypes = {};
// FeatureComponent.defaultProps = {};

export default FeatureComponent;
