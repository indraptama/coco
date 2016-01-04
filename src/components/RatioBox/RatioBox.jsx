import React from 'react';
import imgFill from '../../vendor/imgFill.js';

const defaultProps = {
  height: '100%',
};

const propTypes = {
  height: React.PropTypes.string,
  img: React.PropTypes.string,
};

class RatioBox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.img !== null ) {
      imgFill('.imgFill', '.imgFillSrc');
    }
  }

  render() {
    const Style = {
      'height': {
        paddingBottom: this.props.height,
      },
    };

    return (
      <div className="FlexEmbed imgFill">
        <div className="FlexEmbed-ratio" style={Style.height}/>
        <div className="FlexEmbed-content">
          <img src={this.props.img} className="imgFillSrc" />
          {this.props.children}
        </div>
      </div>
    );
  }
}

RatioBox.defaultProps = defaultProps;
RatioBox.propTypes = propTypes;
export default RatioBox;
