import './Home.css';

import React from 'react';
import RatioBox from '../components/RatioBox/RatioBox.jsx';

const wHFull = () => {
  const WH = window.innerHeight;
  return WH
};

class Home extends React.Component {
  render() {
    return (
      <div className="Grid">
        <div className="Grid-cell u-lg-size1of2">
          <RatioBox img="assets/pohon1.jpg" height='100vh'>
            Hallo
          </RatioBox>
        </div>
        <div className="Grid-cell u-lg-size1of2">
          <div className="Grid">
            <div className="Grid-cell u-size1of2">
              <RatioBox img="" height='33.333vh'>
                Hallo
              </RatioBox>
            </div>
            <div className="Grid-cell u-size1of2">
              <RatioBox img="" height='33.333vh'>
                Hallo
              </RatioBox>
            </div>
            <div className="Grid-cell">
              <RatioBox img="" height='33.333vh'>
                Hallo
              </RatioBox>
            </div>
            <div className="Grid-cell u-size1of2">
              <RatioBox img="" height='33.333vh'>
                Hallo
              </RatioBox>
            </div>
            <div className="Grid-cell u-size1of2">
              <RatioBox img="" height='33.333vh'>
                Hallo
              </RatioBox>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Home;
