import React from 'react';

import Newsletter from '../../components/Newsletter';
import CustomSlider from '../../components/Banner';

import { Container, BannerSobre, Sliders } from './styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slider from 'infinite-react-carousel';



function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <Container>
      <CustomSlider />
      <div>
        <Carousel
          responsive={responsive}
          infinite={true}
          customTransition="all .5"
        >
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>;
      </div>
      <Newsletter />
    </Container>
  );
}
export default Home;