import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import banner from '../../assets/images/banner.png';


export default class CustomSlider extends Component {
  render() {
    const settings = {
      arrowsBlock: false,
      dots: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={banner} alt="Corebiz" />
          </div>
          <div>
          </div>
          <div>
          </div>
          <div>
          </div>
        </Slider>
      </div>
    );
  }
}