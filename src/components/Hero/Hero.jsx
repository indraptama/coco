import './Hero.css';
import imgFill from '../../vendor/imgFill.js';
import React from 'react';
import Radium from 'radium';

const defaultProps = {
  height: '100%',
};

class Hero extends React.Component {

  constructor(props) {
    super(props);
  }


  componentDidMount() {
    imgFill('.imgFill', '.imgFillSrc');
  }

  render() {
    const padValue = {
      paddingBottom: this.props.height,
    };
    
    return (
      <div className="Hero">
        <div className="FlexEmbed">
          <div className="FlexEmbed-ratio" style={padValue}/>
          <div className="FlexEmbed-content">
            <div className="Hero-img imgFill">
              <img src={this.props.img} className="imgFillSrc" />
            </div>
            <div className="Hero-content u-flex u-flexAlignItemsCenter">
              <div className="Container">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Hero.defaultProps = defaultProps;

export default Hero;
