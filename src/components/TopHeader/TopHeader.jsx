require('./TopHeader.css');
import React from 'react';
class TopHeader extends React.Component {

  render() {
    return (
      <div className="TopHeader u-flex u-flexJustifyBetween u-flexAlignItemsCenter">
        <div className="logo-s">
          <img src="assets/logo.png" />
        </div>
        <nav className="u-flex">
          
        </nav>

      </div>
    );
  }

}

export default TopHeader;
